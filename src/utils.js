"use strict";
const fs = require('fs');
function isFileExistsSync(path) {
    return fs.existsSync(path);
}
exports.isFileExistsSync = isFileExistsSync;
//# sourceMappingURL=utils.js.map