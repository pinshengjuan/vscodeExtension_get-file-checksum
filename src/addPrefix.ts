import * as vscode from "vscode";

function addPrefix(value: string): string {
  const config = vscode.workspace.getConfiguration("get-file-checksum");
  const isPerfix: boolean | undefined = config["prefix"];
  const base = config["base"];

  if (!isPerfix) {
    return value;
  }

  switch (base) {
    /** hex */
    case "Hexadecimal":
      return "0x" + value;
    /** TODO: octet */
    /** TODO: binary */
    /** defualt: decimal */
    default:
      return value;
  }
}

export default addPrefix;
