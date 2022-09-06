import * as path from "path";

/**
 *
 * @param files
 * @param checksum
 * @param maxLen
 * @returns
 */
function formatContent(
  files: string[],
  checksum: string[],
  maxLen: number,
  type: string
): string {
  let content: string = type + " result:\n\n";
  let fileCount: number = 0;
  let fillCount: number = 0;
  let blank: string = "";

  for (fileCount = 0; fileCount < files.length; fileCount++) {
    const fileName: string = path.basename(files[fileCount]);
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
