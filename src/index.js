#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const cmdPrompt_1 = require("./cmdPrompt");
const wxChmod_1 = require("./wxChmod");
const exposeShortcut_1 = require("./exposeShortcut");
function execute() {
    return __awaiter(this, void 0, void 0, function* () {
        const path = yield cmdPrompt_1.cmdPrompt();
        try {
            yield wxChmod_1.default(path);
            const isSuccess = yield exposeShortcut_1.exposeCompileShortcut(path);
            if (isSuccess) {
                console.log(`添加全局编译热键成功， 热键为ctrl+alt+shift+f10`);
            }
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.execute = execute;
//# sourceMappingURL=index.js.map