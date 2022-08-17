import * as vscode from "vscode";

function copyToClipboard(result: string) {
  return vscode.env.clipboard.writeText(result);
}

export default copyToClipboard;
