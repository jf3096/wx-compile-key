"use strict";
const fs = require('fs');
const appendScriptStr = `
    nw.App.registerGlobalHotKey(new nw.Shortcut({
        key: "Ctrl+Shift+Alt+F10", active: function () {
            require("../actions/actions.js").reBuild()
        }
    }));
`;
function isAppendScriptExists(content) {
    return content.indexOf(appendScriptStr) > -1;
}
function hasAppendedPromise(shortcutPath) {
    return new Promise((resolve, reject) => {
        fs.readFile(shortcutPath, (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            const content = data.toString();
            resolve(isAppendScriptExists(content));
        });
    });
}
function appendScript(shortcutPath) {
    return new Promise((resolve, reject) => {
        fs.appendFile(shortcutPath, appendScriptStr, (err) => {
            !err ? resolve(true) : reject(err);
        });
    });
}
// 修改微信开发工具，让编译代码快捷键暴露到全局
function exposeCompileShortcut(shortcutPath) {
    return hasAppendedPromise(shortcutPath)
        .then((hasAppended) => {
        if (!hasAppended) {
            return appendScript(shortcutPath);
        }
        return Promise.reject(new Error(`script has already appended.`));
    });
}
exports.exposeCompileShortcut = exposeCompileShortcut;
//# sourceMappingURL=exposeShortcut.js.map