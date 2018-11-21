const fs = require('fs');
/**
 * 平铺数组
 * @param arr
 * @return {*[]}
 */
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));
/**
 * 读取文件
 * @param path
 */
async function readFile(path) {
    return new  Promise((resolve, reject) => {
        const age = [];
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) { reject(err) } else {
                const res = JSON.parse(data);
                for (let i = 0; i < res.length; i++) {
                    const _age = buildAgeData(res[i].age);
                    age.push(_age);
                }
                resolve(age);
            }
        });
    });

}

/**
 * 计算数据
 */
readFile('./data.json').then(res => {
    console.log(deepFlatten(res));

});



/**
 * 获取年龄的方差集合
 */
function buildAgeData(obj) {
    return [obj.all_variance, ...obj.variance];
}

/**
 * 获取性别的方差集合
 */
function buildSexData() {

}

/**
 * 获取城市的方差集合
 */
function buildCityData() {

}

/**
 * 冒泡排序
 * @param arr
 * @return {*}
 */
function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            //  相邻元素两两对比
            if (arr[j] > arr[j + 1]) {
                //  元素交换
                const temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
}


