const robot = require("robotjs");

type OP = 'up'|'down';

function combineKey(...keys:Array<string>) {
    combineKeyOp('down', ...keys);
    combineKeyOp('up', ...keys);
}

function combineKeyOp(op:OP, ...keys:Array<string>) {
    keys.forEach((key:string)=> {
        robot.keyToggle(key, op);
    })
}

export default function triggerCompile() {
    combineKey('control', 'shift', 'alt', 'f10');
}