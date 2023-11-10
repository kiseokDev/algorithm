//배열을 입력받아 output[i]가 자신을 제외한 나머지 요소의 곱셈 결과가 되도록 출력하라.
//주의점: 나눗셈을 하지 않고 O(n)에 풀이하라
export function productExceptSelf(nums) {
  const result = [];
  let product = 1;
  //왼쪽 곱셈 이전 elem 이랑 곱한값 result에 저장, 곱할값 초기화
  for (let i = 0; i < nums.length; i++) {
    result[i] = product;
    product *= nums[i];
  }
  product = 1;
  //왼쪽 곱셈 결과에 오른쪽 값을 차례대로 곱셈9ㅐㅐ
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= product;
    product *= nums[i];
  }
  return result;
}

const nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums));
