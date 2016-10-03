"use strict";
var fs = require('fs');
var appendScriptStr = "\n    nw.App.registerGlobalHotKey(new nw.Shortcut({\n        key: \"Ctrl+Shift+Alt+F10\", active: function () {\n            require(\"../actions/actions.js\").reBuild()\n        }\n    }));\n";
function isAppendScriptExists(content) {
    return content.indexOf(appendScriptStr) > -1;
}
function hasAppendedPromise(shortcutPath) {
    return new Promise(function (resolve, reject) {
        fs.readFile(shortcutPath, function (err, data) {
            if (err) {
                reject(err);
                return;
            }
            var content = data.toString();
            resolve(isAppendScriptExists(content));
        });
    });
}
function appendScript(shortcutPath) {
    return new Promise(function (resolve, reject) {
        fs.appendFile(shortcutPath, appendScriptStr, function (err) {
            !err ? resolve(true) : reject(err);
        });
    });
}
// 修改微信开发工具，让编译代码快捷键暴露到全局
function exposeCompileShortcut(shortcutPath) {
    return hasAppendedPromise(shortcutPath)
        .then(function (hasAppended) {
        if (!hasAppended) {
            return appendScript(shortcutPath);
        }
        return Promise.reject(new Error("script has already appended."));
    });
}
exports.exposeCompileShortcut = exposeCompileShortcut;
//# sourceMappingURL=exposeShortcut.js.map