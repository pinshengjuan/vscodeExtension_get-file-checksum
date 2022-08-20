import { readFile } from "fs";

/**
 *
 * @param filePath
 * @returns
 */
function readContent(filePath: string): Promise<any> {
  return new Promise((resolve) => {
    readFile(filePath, "binary", (err, contents) => {
      resolve(contents);
    });
  });
}

export default readContent;
