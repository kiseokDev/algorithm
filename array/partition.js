//n개의 페어를 이용한 min(a,b)의 합으로 만들 수 있는 가장 큰 수를 출력하라
//배열을 정렬하면 짝수번째가 홀수번째보다 항상 작거나 같다
function arrayPairSum(nums) {
  //오름차순 풀이
  let result = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i += 2) {
    result += nums[i];
  }
  return result;
}

const refectoredArrayPairSum = nums =>
  nums
    .sort((a, b) => a - b)
    .reduce((acc, val, idx) => acc + (idx % 2 === 0 ? val : 0), 0);

const testPairSum = nums =>
  nums
    .sort((a, b) => a - b)
    .reduce((acc, num, idx) => acc + (idx % 2 === 0 ? num : 0), 0);

export { refectoredArrayPairSum, testPairSum };
