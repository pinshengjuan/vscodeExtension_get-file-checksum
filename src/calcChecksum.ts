import * as vscode from "vscode";
import * as fs from "fs/promises";

function calc8_16_32(data: string) {
  let i = 0;
  let result: number = 0;
  const arr = data.split(/\r?\n/);
  for (i = 0; i < arr[0].length; i++) {
    result += arr[0][i].charCodeAt(0);
  }

  return result;
}

async function calcChecksum(filePath: string, type: string) {
  const contents = await fs.readFile(filePath, { encoding: "utf-8" });

  switch (type) {
    case "8":
    case "16":
    case "32":
      return calc8_16_32(contents);
    case "CRC-16":
    case "CRC-32":
    case "SHA-1":
    case "MD-5":
      throw new Error("these features are under development");
    default:
      throw new Error(`Out of type ${type}`);
  }
}

export default calcChecksum;
