import * as vscode from "vscode";
import * as path from "path";

/**
 *
 * @param files
 * @param checksum
 * @param maxLen
 * @returns
 */
function formatContent(
  files: string[],
  checksum: string[],
  maxLen: number,
  type: string
): string {
  let content: string = type + " result:\n\n";
  let fileCount: number = 0;
  let fillCount: number = 0;
  let blank: string = "";
  let symbol: string = "";
  const vscConfig: vscode.WorkspaceConfiguration =
    vscode.workspace.getConfiguration("get-file-checksum");

  vscConfig["symbol"] ? (symbol = vscConfig["symbol"]) : (symbol = ": ");

  for (fileCount = 0; fileCount < files.length; fileCount++) {
    const fileName: string = path.basename(files[fileCount]);
    const fill: number = maxLen - fileName.length;
    blank = "";
    for (fillCount = 0; fillCount < fill; fillCount++) {
      blank += " ";
    }
    content += fileName + blank + symbol + checksum[fileCount] + "\n";
  }
  return content;
}

export default formatContent;
