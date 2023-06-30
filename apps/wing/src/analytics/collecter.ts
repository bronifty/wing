import { Command } from "commander";
import { AnalyticsStorage } from "./storage";
import { AnalyticEvent, NodeData, OSData } from "./event";
import * as os from "os";
import { PACKAGE_VERSION } from "../cli";

export class AnalyticsCollector {
  cmd: Command;

  constructor(cmd: Command) {
    this.cmd = cmd;
  }

  public collect() {
    AnalyticsStorage.storeAnalyticEvent(this.collectAnalyticEvent(this.cmd));
  }

  private collectAnalyticEvent(cmd: Command): AnalyticEvent {
    return {
      event: `wing cli:${cmd.name()}`,
      properties: {
        inCI: false,
        cli: {
          target: cmd.opts().target,
          options: `${JSON.stringify(cmd.opts())}`,
          version: PACKAGE_VERSION,
        },
        os: this.collectOSData(),
        node: this.collectNodeData(),
      }
    }
  }

  private collectOSData(): OSData {
    return {
      name: os.platform(),
      arch: os.arch(),
      platform: os.platform(),
      release: os.release(),
    }
  }

  private collectNodeData(): NodeData {
    return {
      version: process.version,
    };
  }
}