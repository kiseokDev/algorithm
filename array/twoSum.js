// target을 만들 수 있는 nums의 두 숫자 인덱스를 리턴하라.
// 딕셔너리
function twoSum(nums, target) {
  // 키와 값을 바꾸어서 딕셔너리로 저장
  let nums_map = {};
  let result = null; // 결과를 저장할 변수

  nums.forEach((val, idx) => {
    if (nums_map[target - val] !== undefined) {
      result = [nums.indexOf(target - val), idx]; // 결과를 저장
      return; // 함수 종료
    }
    nums_map[val] = idx;
  });

  return result; // 결과 반환
}

const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // [ 0, 1 ]

//값을 찾는 문제에서만 괜찮은 방식 : 투포인터
function twoSumWithTwoPointer(nums, target) {
  // 투 포인터
  let left = 0;
  let right = target.length - 1;

  while (left < right) {
    // 합이 타겟보다 크면 오른쪽 포인터를 왼쪽으로
    if (nums[left] + nums[right] < target) {
      left++;
    }
    // 합이 타겟보다 작으면 왼쪽 포인터를 오른쪽으로
    else if (nums[left] + nums[right] > target) {
      right--;
    }
    // 합이 타겟과 같으면 정답 취급
    else {
      return [left, right];
    }
  }
}

const test = [];
