const shellSort = function (arr, n) {
    for (D = n / 2; D >= 1; D = D / 2) {
        for (i = D; i < n; i++) {
            val = arr[i];
            for (j = i; j >= D && arr[j - D] > val; j = j - D) {
                arr[j] = arr[j - D];
            }
            arr[j] = val;
        }
    }
    return arr;
}


const arr = [30, 50, 10, 40, 75, 20, 45, 55, 25, 35, 65, 80, 15, 60, 5, 70];
console.log(arr.length)
result = shellSort(arr, arr.length)
console.log(result);