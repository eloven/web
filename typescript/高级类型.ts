/**
 * 交叉类型
 * @param first
 * @param second
 */
function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let id in first) {
        (<any>result)[id] = (<any>first)[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id];
        }
    }
    return result;
}

export class Person {
    constructor(public name: string) { }
}

interface LogAble {
    log(): void;
}
class ConsoleLogger implements LogAble {
    log() {
        // ...
    }
}
const jim = extend(new Person("Jim"), new ConsoleLogger());
const n = jim.name;
jim.log();