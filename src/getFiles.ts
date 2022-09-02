import * as vscode from "vscode";

/**
 *
 */
class GetFiles {
  public context(fileObj: any): Promise<any> {
    return new Promise((resolve) => {
      const fileStr: string[] = [];
      let fileCount: number = 0;
      for (fileCount = 0; fileCount < fileObj[1].length; fileCount++) {
        fileStr.push(fileObj[1][fileCount].fsPath);
      }

      resolve(fileStr);
    });
  }

  public keybinding(fileObj: any): Promise<any> {
    return new Promise(async (resolve) => {
      await vscode.commands.executeCommand("copyFilePath");
      fileObj = await vscode.env.clipboard.readText(); // returns a string

      // see note below for parsing multiple files/folders
      const newUri = vscode.Uri.file(fileObj); // make it a Uri
      resolve(newUri.path.replace(RegExp(/^\//), "").split(RegExp(/\r\n/)));
    });
  }
}
export default new GetFiles();
