"use strict";
var fs = require('fs');
function isFileExistsSync(path) {
    return fs.existsSync(path);
}
exports.isFileExistsSync = isFileExistsSync;
//# sourceMappingURL=io-utils.js.map