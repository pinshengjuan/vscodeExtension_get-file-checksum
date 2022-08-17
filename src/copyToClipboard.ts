import { rejects } from "assert";
import * as vscode from "vscode";

function copyToClipboard(result: string): Promise<any> {
  return new Promise((resolve) => {
    vscode.env.clipboard.writeText(result).then(() => {
      resolve("success");
    });
  });
}

export default copyToClipboard;
