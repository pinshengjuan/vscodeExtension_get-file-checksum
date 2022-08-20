// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import main from "./main";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "get-file-checksum.getFileChecksum8",
      (uri: vscode.Uri, selectedFiles: any) => {
        main(selectedFiles, "8"); //This is the entry point of the whole project
      }
    )
  );
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "get-file-checksum.getFileChecksum16",
      (uri: vscode.Uri, selectedFiles: any) => {
        main(selectedFiles, "16"); //This is the entry point of the whole project
      }
    )
  );
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "get-file-checksum.getFileChecksum32",
      (uri: vscode.Uri, selectedFiles: any) => {
        main(selectedFiles, "32"); //This is the entry point of the whole project
      }
    )
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
