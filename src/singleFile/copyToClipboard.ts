import * as vscode from "vscode";

/**
 *
 * @param result
 * @returns
 */
function copyToClipboard(result: string) {
  return vscode.env.clipboard.writeText(result);
}

export default copyToClipboard;
