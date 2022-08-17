import * as vscode from "vscode";

function changeToString(input: number): string {
  const config = vscode.workspace.getConfiguration("get-file-checksum");
  const base: string = config["base"];

  const radial = base === "Hexadecimal" ? 16 : 10;

  return input.toString(radial);
}

export default changeToString;
