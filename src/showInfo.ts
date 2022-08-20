import * as vscode from "vscode";

function showInfo() {
  const vscConfig = vscode.workspace.getConfiguration("get-file-checksum");
  if (vscConfig["checksumCopiedNotification"]) {
    vscode.window.showInformationMessage(
      "The checksum value for a single file has been copied to the clipboard!"
    );
  }
}

export default showInfo;
