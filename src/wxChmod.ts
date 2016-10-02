const chmod = require('chmod');
export default function wxChmod(path:string) {
    return new Promise((resolve, reject)=> {
        try {
            chmod(path, 777);
            resolve(true);
        } catch (err) {
            reject(err)
        }
    });
}