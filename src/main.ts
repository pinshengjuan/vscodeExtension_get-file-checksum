// import { writeFile } from "fs";
import * as vscode from "vscode";
import checkAlgorithm from "./checkAlgorithm";
import copyToClipboard from "./copyToClipboard";
import changeToString from "./changeToString";
import addPrefix from "./addPrefix";

/**
 *
 * @param filePath
 */
function main(filePath: string, type: string) {
  const promise = checkAlgorithm(filePath, type);

  promise
    .then((resValue: number) => {
      console.log(resValue);

      const str = changeToString(resValue);
      const strWithPrefix = addPrefix(str);

      copyToClipboard(strWithPrefix).then(() => {
        // TODO: copy to clipboard successfully
        console.log("success");
      });
    })
    .catch((fail) => {
      console.log(fail);
    });
}

export default main;
