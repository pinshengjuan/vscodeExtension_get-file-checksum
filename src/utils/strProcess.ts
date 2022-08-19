import * as vscode from "vscode";

type Configuration = {
  base: number;
  isPrefix: boolean;
};

function strProcess(content: number) {
  const vscConfig = vscode.workspace.getConfiguration("get-file-checksum");
  const baseInNum: number = vscConfig["base"] === "Decimal" ? 10 : 16;
  const perfix: boolean = baseInNum === 10 ? false : vscConfig["prefix"];
  const config: Configuration = { base: baseInNum, isPrefix: perfix };

  let str: string = numToStr(config.base, content);
  let strPrepended: string = addPrefix(config.isPrefix, str);
  return strPrepended;
}

function numToStr(base: number, content: number) {
  return content.toString(base).toUpperCase();
}

function addPrefix(isPrefix: boolean, str: string) {
  if (!isPrefix) {
    return str;
  }
  return "0x" + str;
}

export default strProcess;
