import loopToParseFile from "./doForloop";
import StrProcess from "./utils/strProcess";
import copyToClipboard from "./singleFile/copyToClipboard";
import showInfo from "./singleFile/showInfo";
import openEditor from "./multiFile/openEditor";
import writeToFile from "./multiFile/writeToFile";
import formatContent from "./multiFile/formatContent";

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
        showInfo(type);
        console.log("All done");
      });
    } else {
      const maxLen: number = StrProcess.strFindMaxLen(allSelectedFile);
      const content = formatContent(allSelectedFile, checksumStr, maxLen, type);
      const batchFilePath: string = writeToFile(content);
      openEditor(batchFilePath);
    }
  });
}

export default main;
