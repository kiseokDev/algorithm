const countingSort = (arr, length) => {
  let min = arr[0];
  let max = arr[0];
  const count = [];
  const result = [];

  for (let i = 1; i <= length - 1; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }
  for (let j = min; j <= max; j++) count[j] = 0;
  for (let i = 0; i <= length - 1; i++) count[arr[i]]++;
  for (let j = min + 1; j <= max; j++) count[j] = count[j] + count[j - 1];
  for (let i = length - 1; i >= 0; i--) {
    result[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
  }
  return result;
};

const arr = [7, 5, 9, 8, 4, 5, 7, 5];
const result = countingSort(arr, arr.length);
console.log(result);
