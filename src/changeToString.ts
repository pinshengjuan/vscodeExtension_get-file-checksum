import { rejects } from "assert";
import * as vscode from "vscode";

function changeToString(result: number): Promise<any> {
  return new Promise((resolve) => {
    const config = vscode.workspace.getConfiguration("get-file-checksum");
    const base = config["base"];
    resolve((base==="Hexadecimal")?result.toString(16):result.toString(10));
  });
}

export default changeToString;
