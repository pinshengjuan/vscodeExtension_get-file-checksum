import { rejects } from "assert";
import * as vscode from "vscode";
import {readFileSync, promises as fsPromises} from 'fs';

function calcChecksum(filePath: string, type: string): Promise<any> {
  return new Promise((resolve) => {
    const contents = readFileSync(filePath, 'utf-8');
    let i = 0;
    let result: number = 0;
    const arr = contents.split(/\r?\n/);
    for(i=0;i<arr[0].length; i++)
    {
      result += arr[0][i].charCodeAt(0);
    }
    console.log(result);
    resolve(result);
  });
}

export default calcChecksum;
