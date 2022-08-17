import { rejects } from "assert";
import * as vscode from "vscode";
// import calcChecksum from "./Algorithm/calcChecksum";
import calcChecksum from "./calcChecksum";

function checkAlgorithm(filePath: string, type: string) {
  switch (type) {
    case "8":
    case "16":
    case "32":
      return calcChecksum(filePath, type);
    case "CRC-16":
    case "CRC-32":
    case "SHA-1":
    case "MD-5":
      throw new Error("these features are under development");
    default:
      throw new Error(`Out of type ${type}`);
  }
}

export default checkAlgorithm;
