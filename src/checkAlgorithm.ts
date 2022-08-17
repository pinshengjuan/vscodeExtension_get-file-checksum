import { rejects } from "assert";
import * as vscode from "vscode";
// import calcChecksum from "./Algorithm/calcChecksum";
import calcChecksum from "./calcChecksum";

function checkAlgorithm(filePath: string, type: string): Promise<any> {
  return new Promise((resolve, reject) => {
    let func;

    switch (type) {
      case "8":
      case "16":
      case "32":
        func = calcChecksum(filePath, type);
        break;
      case "CRC-16":
      case "CRC-32":
      case "SHA-1":
      case "MD-5":
        reject("these features are under development");
        break;
      default:
        reject(`Out of type ${type}`);
    }

    
    resolve(func);
  });
}

export default checkAlgorithm;
