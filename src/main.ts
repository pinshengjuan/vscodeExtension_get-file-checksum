import * as vscode from 'vscode';
import checkAlgorithm from "./checkAlgorithm";
import copyToClipboard from "./copyToClipboard";
import strProcess from "./utils/strProcess";
import readContent from "./readContent";

/**
 *
 * @param filePath
 * @param type
 */
function main(filePath: string, type: string) {
  readContent(filePath).then((contents) => {
    let algorithmRet: any | undefined = checkAlgorithm(type);

    const checksumNum = algorithmRet(contents, type);
    const checksumStr: string = strProcess(checksumNum);
    copyToClipboard(checksumStr).then(() => {
      const vscConfig = vscode.workspace.getConfiguration("get-file-checksum");
      if(vscConfig["checksumCopiedNotification"])
      {
        vscode.window.showInformationMessage('The checksum value for a single file has been copied to the clipboard!');
      }
      console.log("All done");
    });
  });
}

export default main;
