// 女性占比
const data = [0.87, 0.77, 0.86, 0.89, 0.91];

/**
 * 平均值
 * @param arr
 */
function getRage(arr: number[]) {
    let all: number = 0;
    for (let i = 0; i <arr.length ; i++) {
        all += arr[i];
    }
    return all/arr.length
}

/**
 * 求方差
 * @param arr
 */
function getFxx(arr: number[]) {
    let amount: number = 0;
    const _ave = getRage(arr);
    for (let i = 0; i <arr.length ; i++) {
        amount += (arr[i] - _ave) * (arr[i] - _ave);
    }
    return amount/arr.length
}

const res = getFxx(data);

console.log(res);