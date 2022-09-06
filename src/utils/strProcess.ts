import * as vscode from "vscode";
import * as path from "path";

type Configuration = {
  base: number;
  isPrefix: boolean;
};

class StrProcess {
  public overallStr(content: number): string {
    const vscConfig: vscode.WorkspaceConfiguration =
      vscode.workspace.getConfiguration("get-file-checksum");
    const baseInNum: number = vscConfig["base"] === "Decimal" ? 10 : 16;
    const perfix: boolean = baseInNum === 10 ? false : vscConfig["prefix"];
    const config: Configuration = { base: baseInNum, isPrefix: perfix };

    let str: string = this.numToStr(config.base, content);
    let strPrepended: string = this.addPrefix(config.isPrefix, str);
    return strPrepended;
  }

  public strFindMaxLen(files: string[]): number {
    let fileCount: number = 0;
    let max: number = 0;

    for (fileCount = 0; fileCount < files.length; fileCount++) {
      const currentFileLen: number = path.basename(files[fileCount]).length;
      max = max < currentFileLen ? currentFileLen : max;
    }
    return max;
  }

  private numToStr(base: number, content: number): string {
    return content.toString(base).toUpperCase();
  }

  private addPrefix(isPrefix: boolean, str: string): string {
    if (!isPrefix) {
      return str;
    }
    return "0x" + str;
  }
}

export default new StrProcess();
