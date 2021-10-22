import * as vscode from 'vscode';
import {genFile} from './genFile'

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('LCC.lcc', (uri) => {
		const dirPath = uri.fsPath
		genFile(dirPath)
	});
	context.subscriptions.push(disposable);
}

export function deactivate() {}
