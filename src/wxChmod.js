"use strict";
const chmod = require('chmod');
function wxChmod(path) {
    return new Promise((resolve, reject) => {
        try {
            chmod(path, 777);
            resolve(true);
        }
        catch (err) {
            reject(err);
        }
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = wxChmod;
//# sourceMappingURL=wxChmod.js.map