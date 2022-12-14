import * as fs from "fs";
import * as path from "path";

/**
 *
 * @param content
 * @returns
 */
function writeToFile(content: string): string {
  let batchFilePath: string = path.join(__dirname, "batchChecksum.text");

  fs.writeFileSync(batchFilePath, content);

  return batchFilePath;
}

export default writeToFile;
