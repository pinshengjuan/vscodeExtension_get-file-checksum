import * as vscode from "vscode";

/**
 *
 * @param batchFile
 * @returns
 */
function openEditor(batchFile: string): Promise<any> {
  return new Promise((resolve) => {
    var batchPath = vscode.Uri.file(batchFile);

    vscode.workspace.openTextDocument(batchPath).then((doc) => {
      vscode.window.showTextDocument(doc);
    });
  });
}

export default openEditor;
