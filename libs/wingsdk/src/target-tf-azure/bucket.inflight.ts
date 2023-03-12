import { DefaultAzureCredential } from "@azure/identity";
import { BlobServiceClient, ContainerClient } from "@azure/storage-blob";
import { BucketDeleteOptions, IBucketClient } from "../cloud";
import { BucketEvents, BucketEventType } from "../cloud/bucket.events";
import { Json } from "../std";

export class BucketClient extends BucketEvents implements IBucketClient {
  private readonly bucketName: string;
  private readonly blobServiceClient: BlobServiceClient;
  private readonly containerClient: ContainerClient;
  private readonly defaultAzureCredential: DefaultAzureCredential =
    new DefaultAzureCredential();

  constructor(
    bucketName: string,
    storageAccount: string,
    blobServiceClient?: BlobServiceClient
  ) {
    super();
    this.bucketName = bucketName;
    this.blobServiceClient =
      blobServiceClient ??
      new BlobServiceClient(
        `https://${storageAccount}.blob.core.windows.net`,
        this.defaultAzureCredential
      );
    this.containerClient = this.blobServiceClient.getContainerClient(
      this.bucketName
    );
  }

  /**
   * Put object into bucket with given body contents
   *
   * @param key Key of the object
   * @param body string contents of the object
   */
  public async put(key: string, body: string): Promise<void> {
    const actionType = (await this.list(key)).length
      ? BucketEventType.UPDATE
      : BucketEventType.PUT;

    await this.containerClient
      .getBlockBlobClient(key)
      .upload(body, body.length);

    void this.onChange(actionType, key);
  }

  /**
   * Put Json object into bucket with given body contents
   *
   * @param key Key of the object
   * @param body Json object
   */
  public async putJson(key: string, body: Json): Promise<void> {
    await this.put(key, JSON.stringify(body, null, 2));
  }

  /**
   * Get object content from bucket
   *
   * @param key Key of the object
   * @returns string content of the object as string
   */
  public async get(key: string): Promise<string> {
    const blobClient = this.containerClient.getBlobClient(key);

    const downloadResponse = await blobClient.download();
    if (downloadResponse.readableStreamBody === undefined) {
      return "";
    }

    const downloaded = (
      await this.streamToBuffer(downloadResponse.readableStreamBody)
    ).toString();

    return downloaded;
  }

  /**
   * Get object content from bucket as Json
   *
   * @param key Key of the object
   * @returns Json content of the object
   */
  public async getJson(key: string): Promise<Json> {
    return JSON.parse(await this.get(key));
  }

  /**
   * List all keys in the bucket
   *
   * @param prefix Limits the response to keys that begin with the specified prefix
   * TODO - add pagination support
   */
  public async list(prefix?: string): Promise<string[]> {
    const list: string[] = [];

    for await (const blob of this.containerClient.listBlobsFlat({ prefix })) {
      list.push(blob.name);
    }

    return list;
  }

  /**
   * Delete an existing object using a key from the bucket
   *
   * @param key Key of the object
   * @param opts Option object supporting additional strategies to delete item from a bucket
   */
  public async delete(
    key: string,
    opts: BucketDeleteOptions = {}
  ): Promise<void> {
    const mustExist = opts.mustExist ?? false;

    const blockBlobClient = this.containerClient.getBlockBlobClient(key);

    try {
      await blockBlobClient.delete();
      void this.onChange(BucketEventType.DELETE, key);
    } catch (err) {
      const error = err as any;
      if (!mustExist && error.details.errorCode === "BlobNotFound") {
        return;
      }

      throw Error(`unable to delete "${key}": ${error.details.message}`);
    }
  }

  /**
   * Required helper function for node js only.
   *
   * See https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/storage/storage-blob
   */
  private streamToBuffer(stream: NodeJS.ReadableStream): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      const chunks: Buffer[] = [];
      stream.on("data", (data) => {
        chunks.push(Buffer.isBuffer(data) ? data : Buffer.from(data));
      });
      stream.on("end", () => {
        resolve(Buffer.concat(chunks));
      });
      stream.on("error", reject);
    });
  }
}
