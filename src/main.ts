// import { writeFile } from "fs";
import * as vscode from "vscode";

import NumToStrHelper from "./utils/numToStr";
import calcChecksum from "./calcChecksum";
import copyToClipboard from "./copyToClipboard";

/**
 *
 * @param filePath
 */
function main(filePath: string, type: string) {
  /**
   * calculate checksum
   */
  calcChecksum(filePath, type)
    .then((checksum: number) => {
      console.log(checksum);

      /** convert checksum number to string */
      const strChecksum = NumToStrHelper.convert(checksum);

      copyToClipboard(strChecksum).then(() => {
        // TODO: copy to clipboard successfully
        console.log("success");
      });
    })
    .catch((fail) => {
      console.log(fail);
    });
}

export default main;
