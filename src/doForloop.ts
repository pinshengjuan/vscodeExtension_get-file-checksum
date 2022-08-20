import readContent from "./readContent";
import checkAlgorithm from "./checkAlgorithm";
import StrProcess from "./utils/strProcess";

/**
 *
 * @param allSelectedFile
 * @param type
 * @returns
 */
function doForloop(allSelectedFile: any, type: string): Promise<any> {
  return new Promise(async (resolve) => {
    let fileCount: number = 0;
    const files: string[] = [];
    const checksumStr: string[] = [];
    for (fileCount = 0; fileCount < allSelectedFile.length; fileCount++) {
      files.push(allSelectedFile[fileCount].fsPath);
      const contents: string = await readContent(files[fileCount]);
      let algorithmRet: any | undefined = checkAlgorithm(type);

      const checksumNum: number = algorithmRet(contents, type);
      checksumStr.push(StrProcess.strStr(checksumNum));
    }
    resolve(checksumStr);
  });
}

export default doForloop;
