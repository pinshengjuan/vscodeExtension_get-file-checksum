import * as vscode from "vscode";

/**
 *
 */
function showInfo(type: string) {
  const vscConfig = vscode.workspace.getConfiguration("get-file-checksum");
  if (vscConfig["checksumCopiedNotification"]) {
    vscode.window.showInformationMessage(
      `"${type}" result for a single file has been copied to the clipboard!`
    );
  }
}

export default showInfo;
