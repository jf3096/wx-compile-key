import autoCompileWX from "../src/autoCompileWX";

export const autoCompileWebpackLoader = (content:string)=> {
    this.cacheable && this.cacheable();
    autoCompileWX();
    return content;
};