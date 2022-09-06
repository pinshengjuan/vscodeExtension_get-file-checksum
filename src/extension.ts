// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import main from "./main";
import GetFiles from "./getFiles";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "get-file-checksum.keybinding",
      async () => {
        GetFiles.keybinding().then((fileStr: string[]) => {
          const config: vscode.WorkspaceConfiguration =
            vscode.workspace.getConfiguration("get-file-checksum");
          const algorithm: any = config["whichAlgorithmForKeybinding"];
          main(fileStr, algorithm); //This is the entry point of the whole project
        });
      }
    )
  );
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "get-file-checksum.getFileChecksum8",
      (...fileObj) => {
        GetFiles.context(fileObj).then((fileStr: string[]) => {
          main(fileStr, "Checksum-8"); //This is the entry point of the whole project
        });
      }
    )
  );
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "get-file-checksum.getFileChecksum16",
      (...fileObj) => {
        GetFiles.context(fileObj).then((fileStr: string[]) => {
          main(fileStr, "Checksum-16"); //This is the entry point of the whole project
        });
      }
    )
  );
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "get-file-checksum.getFileChecksum32",
      (...fileObj) => {
        GetFiles.context(fileObj).then((fileStr: string[]) => {
          main(fileStr, "Checksum-32"); //This is the entry point of the whole project
        });
      }
    )
  );
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "get-file-checksum.getFileChecksumSha1",
      (...fileObj) => {
        GetFiles.context(fileObj).then((fileStr: string[]) => {
          main(fileStr, "SHA-1"); //This is the entry point of the whole project
        });
      }
    )
  );
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "get-file-checksum.getFileChecksumSha256",
      (...fileObj) => {
        GetFiles.context(fileObj).then((fileStr: string[]) => {
          main(fileStr, "SHA-256"); //This is the entry point of the whole project
        });
      }
    )
  );
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "get-file-checksum.getFileChecksumSha384",
      (...fileObj) => {
        GetFiles.context(fileObj).then((fileStr: string[]) => {
          main(fileStr, "SHA-384"); //This is the entry point of the whole project
        });
      }
    )
  );
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "get-file-checksum.getFileChecksumSha512",
      (...fileObj) => {
        GetFiles.context(fileObj).then((fileStr: string[]) => {
          main(fileStr, "SHA-512"); //This is the entry point of the whole project
        });
      }
    )
  );
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "get-file-checksum.getFileChecksumMd5",
      (...fileObj) => {
        GetFiles.context(fileObj).then((fileStr: string[]) => {
          main(fileStr, "MD-5"); //This is the entry point of the whole project
        });
      }
    )
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
