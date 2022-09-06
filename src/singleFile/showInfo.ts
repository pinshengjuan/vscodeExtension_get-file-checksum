import * as vscode from "vscode";
import * as path from "path";

/**
 *
 */
function showInfo(files: string[], type: string) {
  const vscConfig = vscode.workspace.getConfiguration("get-file-checksum");
  if (vscConfig["checksumCopiedNotification"]) {
    const fileName: string = path.basename(files[0]);
    vscode.window.showInformationMessage(
      `"${type}" result for "${fileName}" has been copied to the clipboard!`
    );
  }
}

export default showInfo;
