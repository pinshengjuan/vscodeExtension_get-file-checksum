import { rejects } from "assert";
import * as vscode from "vscode";

function addPrefix(result: string): Promise<any> {
  return new Promise((resolve) => {
    const config = vscode.workspace.getConfiguration("get-file-checksum");
    const isPerfix = config["prefix"];
    const base = config["base"];

    if(base === "Hexadecimal")
    {
      if (isPerfix) {
        result = "0x" + result;
      }
    }

    resolve(result);
  });
}

export default addPrefix;
