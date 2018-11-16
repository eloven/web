/**
 * Void
 * Null
 * Undefined
 * Never 永不存在的值的类型
 */
function getType() {
    let isDone: boolean;
    let decLiteral: number;
    let name: string;
    let list: number[];
    let x: [string, number];    // Tuple  元祖
    enum Color {Red, Green, Blue}   // 枚举
    let c : Color = Color.Red;
    let notSure: any;

    return { isDone, decLiteral, name, list, x, c, notSure }
}

const obj = getType();

obj.notSure = 'tom';
obj.isDone = true;
obj.name = 'jack';
obj.list = [1, 3, 4];
obj.decLiteral = 1.2321;
console.log(obj);
// 不能被赋值，可以被改变
const notChange = 'jack';
let canChange;

notChange.concat(' is a man');
canChange = 'tom is a man';

