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

  public keybinding(): Promise<any> {
    return new Promise(async (resolve) => {
      /**
       * Use copy file path then read clipboard to get selected files
       */
      await vscode.commands.executeCommand("copyFilePath");
      const fileStr: string = await vscode.env.clipboard.readText();
      const uri: vscode.Uri = vscode.Uri.file(fileStr); // make it a Uri
      const filesStrArr: string[] = uri.path
        .replace(RegExp(/^\//), "") //remove the foremost "/"
        .split(RegExp(/\r\n/)); //separate string to array by "\r\n"
      resolve(filesStrArr);
    });
  }
}
export default new GetFiles();
