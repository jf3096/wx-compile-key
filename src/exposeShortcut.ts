import * as fs from 'fs';
const appendScriptStr = `
    nw.App.registerGlobalHotKey(new nw.Shortcut({
        key: "Ctrl+Shift+Alt+F10", active: function () {
            require("../actions/actions.js").reBuild()
        }
    }));
`;

function isAppendScriptExists(content:string) {
    return content.indexOf(appendScriptStr) > -1;
}

function hasAppendedPromise(shortcutPath:string):Promise<boolean> {
    return new Promise((resolve, reject)=> {
        fs.readFile(shortcutPath, (err:NodeJS.ErrnoException, data:Buffer)=> {
            if (err) {
                reject(err);
                return;
            }
            const content = data.toString();
            resolve(isAppendScriptExists(content));
        })
    });
}

function appendScript(shortcutPath:string):Promise<boolean> {
    return new Promise((resolve, reject)=> {
        fs.appendFile(shortcutPath, appendScriptStr, (err:NodeJS.ErrnoException)=> {
            !err ? resolve(true) : reject(err);
        })
    });
}

// 修改微信开发工具，让编译代码快捷键暴露到全局
export function exposeCompileShortcut(shortcutPath:string):Promise<boolean> {
    return hasAppendedPromise(shortcutPath)
        .then((hasAppended:boolean):Promise<boolean>=> {
            if (!hasAppended) {
                return appendScript(shortcutPath)
            }
            return Promise.reject(new Error(`script has already appended.`)) as Promise<any>
        })
}