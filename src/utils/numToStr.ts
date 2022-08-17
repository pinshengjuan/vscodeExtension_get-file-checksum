import * as vscode from "vscode";

type PrependOption = {
  base: string;
  addPrefix?: boolean;
};

class NumToStrHelper {
  public convert(value: number) {
    /** read config from extension configuration */
    const config = vscode.workspace.getConfiguration("get-file-checksum");
    const base: string = config["base"];
    const isPerfix: boolean | undefined = config["prefix"];

    /** convert to string */
    const str = this.numToStr(value, base);

    /** prepend if needed */
    return this.prepend(str, {
      base,
      addPrefix: isPerfix,
    });
  }

  private numToStr(value: number, base: string) {
    const radial = base === "Hexadecimal" ? 16 : 10;
    return value.toString(radial);
  }

  private prepend(strNum: string, { base, addPrefix }: PrependOption) {
    if (!addPrefix) {
      return strNum;
    }

    switch (base) {
      /** hex */
      case "Hexadecimal":
        return "0x" + strNum;
      /** TODO: octet */
      /** TODO: binary */
      /** defualt: decimal */
      default:
        return strNum;
    }
  }
}

export default new NumToStrHelper();
