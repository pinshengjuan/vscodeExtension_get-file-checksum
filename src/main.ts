import loopToParseFile from "./doForloop";
import StrProcess from "./utils/strProcess";
import copyToClipboard from "./singleFile/copyToClipboard";
import showInfo from "./singleFile/showInfo";
import openEditor from "./multiFile/openEditor";
import writeToFile from "./multiFile/writeToFile";
import formatContent from "./multiFile/formatContent";

/**
 *
 * @param files
 * @param type
 */
async function main(files: string[], type: string) {
  const fileCount = files.length;

  loopToParseFile(files, type).then((checksumStr) => {
    if (fileCount === 1) {
      copyToClipboard(checksumStr[0]).then(() => {
        showInfo(files, type);
        console.log("All done");
      });
    } else {
      const maxLen: number = StrProcess.strFindMaxLen(files);
      const content: string = formatContent(files, checksumStr, maxLen, type);
      const batchFilePath: string = writeToFile(content);
      openEditor(batchFilePath);
    }
  });
}

export default main;
