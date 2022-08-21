import copyToClipboard from "./copyToClipboard";
import StrProcess from "./utils/strProcess";
import showInfo from "./showInfo";
import openEditor from "./openEditor";
import loopToParseFile from "./doForloop";
import writeToFile from "./writeToFile";
import formatContent from "./formatContent";

/**
 *
 * @param allSelectedFile
 * @param type
 */
async function main(allSelectedFile: any, type: string) {
  const fileCount = allSelectedFile.length;

  loopToParseFile(allSelectedFile, type).then((checksumStr) => {
    if (fileCount === 1) {
      copyToClipboard(checksumStr[0]).then(() => {
        showInfo();
        console.log("All done");
      });
    } else {
      const maxLen: number = StrProcess.strFindMaxLen(allSelectedFile);
      const content = formatContent(allSelectedFile, checksumStr, maxLen);
      const batchFilePath: string = writeToFile(content);
      openEditor(batchFilePath);
    }
  });
}

export default main;
