import * as crypto from "crypto";
import * as fs from "fs";
import * as os from "os";
import { dirname, join } from "path";
import { ISimulatorResourceInstance } from "./resource";
import { BucketSchema } from "./schema-resources";
import { BucketDeleteOptions, IBucketClient } from "../cloud";
import { BucketEvents, BucketEventType } from "../cloud/bucket.events";
import { Json } from "../std";
import { ISimulatorContext } from "../testing/simulator";

export class Bucket
  extends BucketEvents
  implements IBucketClient, ISimulatorResourceInstance
{
  private readonly objectKeys: Set<string>;
  private readonly fileDir: string;
  private readonly context: ISimulatorContext;
  private readonly initialObjects: Record<string, string>;

  public constructor(props: BucketSchema["props"], context: ISimulatorContext) {
    super();
    this.objectKeys = new Set();
    this.fileDir = fs.mkdtempSync(join(os.tmpdir(), "wing-sim-"));
    this.context = context;
    this.initialObjects = props.initialObjects ?? {};
  }

  public async init(): Promise<void> {
    for (const [key, value] of Object.entries(this.initialObjects)) {
      await this.context.withTrace({
        message: `Adding object from preflight (key=${key}).`,
        activity: async () => {
          return this.addFile(key, value);
        },
      });
    }
  }

  public async cleanup(): Promise<void> {
    await fs.promises.rm(this.fileDir, { recursive: true, force: true });
  }

  public async put(key: string, value: string): Promise<void> {
    return this.context.withTrace({
      message: `Put (key=${key}).`,
      activity: async () => {
        return this.addFile(key, value);
      },
    });
  }

  private async fileExists(key: string): Promise<boolean> {
    return fs.promises
      .access(join(this.fileDir, key))
      .then(() => true)
      .catch(() => false);
  }

  public async putJson(key: string, body: Json): Promise<void> {
    return this.context.withTrace({
      message: `Put Json (key=${key}).`,
      activity: async () => {
        const actionType: BucketEventType = (await this.fileExists(key))
          ? BucketEventType.UPDATE
          : BucketEventType.PUT;

        const filename = join(this.fileDir, key);
        await fs.promises.writeFile(filename, JSON.stringify(body, null, 2));

        void this.onChange(actionType, key);
      },
    });
  }

  public async get(key: string): Promise<string> {
    return this.context.withTrace({
      message: `Get (key=${key}).`,
      activity: async () => {
        const hash = this.hashKey(key);
        const filename = join(this.fileDir, hash);
        return fs.promises.readFile(filename, "utf8");
      },
    });
  }

  public async getJson(key: string): Promise<Json> {
    return this.context.withTrace({
      message: `Get Json (key=${key}).`,
      activity: async () => {
        const filename = join(this.fileDir, key);
        return JSON.parse(await fs.promises.readFile(filename, "utf8"));
      },
    });
  }

  public async list(prefix?: string): Promise<string[]> {
    return this.context.withTrace({
      message: `List (prefix=${prefix ?? "null"}).`,
      activity: async () => {
        return Array.from(this.objectKeys.values()).filter((key) => {
          if (prefix) {
            return key.startsWith(prefix);
          } else {
            return true;
          }
        });
      },
    });
  }

  public async delete(key: string, opts?: BucketDeleteOptions): Promise<void> {
    return this.context.withTrace({
      message: `Delete (key=${key}).`,
      activity: async () => {
        const mustExist = opts?.mustExist ?? false;

        if (!this.objectKeys.has(key) && mustExist) {
          throw new Error(`Object does not exist (key=${key}).`);
        }

        if (!this.objectKeys.has(key)) {
          return;
        }

        const hash = this.hashKey(key);
        const filename = join(this.fileDir, hash);
        await fs.promises.unlink(filename);
        this.objectKeys.delete(key);
        void this.onChange(BucketEventType.DELETE, key);
      },
    });
  }

  private async addFile(key: string, value: string): Promise<void> {
    const actionType: BucketEventType = this.objectKeys.has(key)
      ? BucketEventType.UPDATE
      : BucketEventType.PUT;
    const hash = this.hashKey(key);
    const filename = join(this.fileDir, hash);
    const dirName = dirname(filename);
    await fs.promises.mkdir(dirName, { recursive: true });
    await fs.promises.writeFile(filename, value);
    this.objectKeys.add(key);
    void this.onChange(actionType, key);
  }

  private hashKey(key: string): string {
    return crypto.createHash("sha512").update(key).digest("hex");
  }
}
