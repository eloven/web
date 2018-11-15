export class SortFunc {
    constructor() {}

    /**
     * 快速排序
     * @param arr
     */
    static quickSort(arr: Array<number>) {

        function partition(arr, left ,right) {     // 分区操作
            let pivot = left,                      // 设定基准值（pivot）
                index = pivot + 1;
            for (let i = index; i <= right; i++) {
                if (arr[i] < arr[pivot]) {
                    swap(arr, i, index);
                    index++;
                }
            }
            swap(arr, pivot, index - 1);
            return index-1;
        }

        function swap(arr, i, j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    /**
     * 归并排序
     * @param arr
     */
    static mergeSort(arr: Array<number>) {
        const len = arr.length;
        if (len < 2) {
            return arr;
        }
        const middle = Math.floor(len /2);
        const left = arr.slice(0, middle);
        const right = arr.slice(middle);
        return merge(left, right);
        function merge(left, right) {
            const result = [];

            while (left.length>0 && right.length>0) {
                if (left[0] <= right[0]) {
                    result.push(left.shift());
                } else {
                    result.push(right.shift());
                }
            }

            while (left.length)
                result.push(left.shift());

            while (right.length)
                result.push(right.shift());

            return result;
        }
    }

    /**
     * 希尔排序
     * @param arr
     */
    static sheelSort(arr: Array<number>) {
        const len = arr.length;
        let temp, gap = 1;
        while (gap < len / 3) {     //  动态定义间隔序列
            gap = gap * 3 + 1;
        }
        for (gap; gap >0; gap = Math.floor(gap / 3)) {
            for (let i = gap; i < len; i++) {
                temp = arr[i];
                let j;
                for (j = i-gap; j > 0 && arr[j]> temp; j-=gap) {
                    arr[j + gap] = arr[j];
                }
                arr[j + gap] = temp;
            }
        }
        return arr;
    }
    /**
     * 插入排序
     * @param arr
     */
    static insertionSort(arr: Array<number>) {
        const len = arr.length;
        let preIndex, current;
        for (let i = 1; i < len; i++) {
            preIndex = i - 1;
            current = arr[i];
            while (preIndex >= 0 && arr[preIndex] > current) {
                arr[preIndex + 1] = arr[preIndex];
                preIndex--;
            }
            arr[preIndex + 1] = current;
        }
        return arr;
    }

    /**
     * 选择排序
     * @param arr
     */
    static selectionSort(arr: Array<number>) {
        const len = arr.length;
        let minIndex, temp;
        for (let i = 0; i < len - 1; i++) {
            minIndex = i;
            for (let j = i + 1; j < len; j++) {
                if (arr[j] < arr[minIndex]) {     //  寻找最小的数
                    minIndex = j;                 //  将最小数的索引保存
                }
            }
            temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
        return arr;
    }
    /**
     * 冒泡排序
     * @param arr
     */
    static bubbleSort(arr: Array<number>) {
        const len = arr.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {        //  相邻元素两两对比
                    const temp = arr[j + 1];        //  元素交换
                    arr[j + 1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr;
    }
}