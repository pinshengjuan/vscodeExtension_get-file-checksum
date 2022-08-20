import * as path from "path";

/**
 *
 * @param file
 * @param checksum
 * @param maxLen
 * @returns
 */
function formatContent(file: any, checksum: string[], maxLen: number) {
  let content: string = "";
  let fileCount: number = 0;
  let fillCount: number = 0;
  let blank: string = "";

  for (fileCount = 0; fileCount < file.length; fileCount++) {
    const fileName: string = path.basename(file[fileCount].fsPath);
    const fill: number = maxLen - fileName.length;
    blank = "";
    for (fillCount = 0; fillCount < fill; fillCount++) {
      blank += " ";
    }
    content += fileName + blank + "  -->  " + checksum[fileCount] + "\n";
  }
  return content;
}

export default formatContent;
