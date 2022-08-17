import { writeFile } from "fs";
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
  checkAlgorithm(filePath, type)
    .then((algorithmRet) => {
      algorithmRet(filePath, type).then((resValue: number) => {
        console.log(resValue);
        changeToString(resValue).then((resultStr) => {
          addPrefix(resultStr).then((resultPrefixStr) => {
            copyToClipboard(resultPrefixStr);
          });
        });
      });
    })
    .catch((fail) => {
      console.log(fail);
    });
}

export default main;
