import * as vscode from 'vscode';
import checkAlgorithm from "./checkAlgorithm";
import copyToClipboard from "./copyToClipboard";
import strProcess from "./utils/strProcess";
import readContent from "./readContent";
import showInfo from "./showInfo";

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
      showInfo();
      console.log("All done");
    });
  });
}

export default main;
