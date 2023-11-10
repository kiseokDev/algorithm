const shellSort = function (arr, n) {
    for (i = 1; i < n; i++) {
        val = arr[i];
        for (j = i; j > 0 && arr[j - 1] > val; j--) {
            arr[j] = arr[j - 1];
        }
        arr[j] = val;
    }
    return arr;
}
const arr = [60, 20, 70, 10, 80, 30, 50, 40];
const result = shellSort(arr, arr.length);
console.log(result);
