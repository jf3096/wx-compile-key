import autoCompileWX from "../src/autoCompileWX";
export const autoCompileGulpTask = (cb) => {
    autoCompileWX();
    cb();
};