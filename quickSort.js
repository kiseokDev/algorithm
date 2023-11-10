function quickSort(array, left = 0, right = array.length - 1) {
    if (left >= right) {
        return;
    }
    const mid = Math.floor((left + right) / 2);
    const pivot = array[mid];
    const partition = divide(array, left, right, pivot);
    quickSort(array, left, partition - 1);
    quickSort(array, partition, right);

    function divide(array, left, right, pivot) {
        while (left <= right) {
            while (array[left] < pivot) {
                left++;
            }
            while (array[right] > pivot) {
                right--;
            }

            if (left <= right) {
                let temp = array[left];
                array[left] = array[right];
                array[right] = temp;
                left++;
                right--;
            }
        }
        return left;
    }
    return array;
}
console.log(quickSort([1, 12, 5, 26, 7, 14, 3, 7]));