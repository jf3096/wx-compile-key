import * as fs from 'fs';
export function isFileExistsSync(path:string) {
    return fs.existsSync(path)
}