"use strict";
const constants_1 = require("./constants");
const utils_1 = require("./utils");
const path = require('path');
const inquirer = require('inquirer');
const questions = [
    {
        type: 'input',
        name: 'wxPath',
        message: '请输入微信web开发工具根目录',
        default: function () {
            return constants_1.WX_ROOT_PATH;
        },
        validate: function (value) {
            const isFileExists = utils_1.isFileExistsSync(value);
            if (isFileExists) {
                return true;
            }
            return '路径不存在，请输入一个合法的路径';
        }
    },
];
function cmdPrompt() {
    return inquirer.prompt(questions).then((msg) => {
        return path.resolve(msg.wxPath, constants_1.RELATIVE_SHORTCUT_PATH);
    });
}
exports.cmdPrompt = cmdPrompt;
//# sourceMappingURL=cmdPrompt.js.map