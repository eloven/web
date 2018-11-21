/**
 * 队列 front 先进先出（后进后出）
 * */

export class Front {
    private frontList: Array<object>;
    private maxSize: number;
    private top: object;
    private bottom: object;
    constructor(n: number, o: object) {
        const _arr = [];
        for (let i = 0; i < n; i ++) {
            _arr.push(o);
        }
        this.frontList = _arr
    }
    public push(obj: object) {
    }
    private isEmpty(): boolean {
        return this.frontList.length === 0;
    }
    private isFull(): boolean{
        return this.frontList.length === this.maxSize;
    }
}