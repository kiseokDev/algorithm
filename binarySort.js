const binarySearch = (arr, left = 0, right = arr.length - 1, x) => {
    if (left > right) return -1;
    let mid = Math.floor((left + right) / 2);
    if (x === arr[mid]) {
        return mid;
    } else if (x < arr[mid]) {
        return binarySearch(arr, left, mid - 1, x);
    } else {
        return binarySearch(arr, mid + 1, right, x);
    }
}

const arr = [10, 15, 20, 25, 30, 35, 40, 45, 50];
const result = binarySearch(arr, 0, arr.length - 1, 50);
console.log(result);

