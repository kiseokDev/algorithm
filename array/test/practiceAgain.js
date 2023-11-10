//n개의 페어를 이용한 min(a,b)의 합으로 만들 수 있는 가장 큰 수를 출력하라
const arrayPairSum = nums =>
  nums
    .sort((a, b) => a - b)
    .reduce((acc, num, idx) => acc + (idx % 2 === 0 ? num : 0), 0);
//sort
//짝수번째인덱스는 항상작은거...

//배열을 입력받아 output[i]가 자신을 제외한 나머지 요소의 곱셈 결과가 되도록 출력하라.
const productExceptSelf = nums => {
  let product = 1;
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    result[i] = product;
    product *= nums[i];
  }
  product = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= product;
    product *= nums[i];
  }
  return result;
};

//배열을 입력받아 합으로 0을 만들 수 있는 3개의 엘리먼트를 출력하라
const threeSum = arr => {
  arr.sort((a, b) => a - b);
  //투포인터
  //중복제거
  //[[],[]] return
  //left++ right--분기
  //	작으면 ++ 크면 --
  //n^2 left right 는 for 문 안에 존재
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let right = arr.length - 1;
    let left = i + 1;
    if (i > 0 && arr[i] === arr[i - 1]) continue;

    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];

      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        result.push([arr[i], arr[left], arr[right]]);
        //중복제거(다음인덱스가 중복일 경우)
        while (left < right && arr[left] === arr[left + 1]) left++;
        while (left < right && arr[right] === arr[right - 1]) right--;
        //또다른 조합을 찾기 위한 인덱스 이동
        left++;
        right--;
      }
    }
  }
  return result;
};

// target을 만들 수 있는 nums의 두 숫자 인덱스를 리턴하라.
const twoSum = (nums, target) => {
  const dictionary = {};

  for (let i = 0; i < nums.length; i++) {
    if (dictionary[target - nums[i]] !== undefined) {
      return [dictionary[target - nums[i]], i];
    }
    dictionary[nums[i]] = i;
  }
};

// height를 입력받아 비 온 후 얼마나 많은 물이 쌓일 수 있는지 계산하라.
const trap = height => {
  let volume = 0;
  let left = 0;
  let maxLeft = height[0];
  let right = height.length - 1;
  let maxRight = height[right];

  while (left < right) {
    maxLeft = Math.max(maxLeft, height[left]);
    maxRight = Math.max(maxRight, height[right]);
    if (maxLeft < maxRight) {
      volume += maxLeft - height[left];
      left++;
    } else {
      volume += maxRight - height[right];
      right--;
    }
  }
  return volume;
  //투 포인터
  //while(left < right)
  //volume += max - 현재높이
  // 분기해서 left ++, right--
};

// 한번에 거래로 낼 수 있는 최대 이익을 산출하라
const maxProfit = prices => {
  let profit = 0;
  let min = prices[0];
  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    profit = Math.max(profit, prices[i] - min);
  }
  return profit;
};

export { twoSum, trap, maxProfit, threeSum, arrayPairSum, productExceptSelf };
