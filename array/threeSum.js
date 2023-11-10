//투포인터!
function ThreeSum(arr) {
  const result = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 2; i++) {
    // 중복된 값 건너뛰기
    if (i > 0 && arr[i] === arr[i - 1]) continue;
    // 간격을 좁혀가며 sum 계산
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      if (sum < 0) left++;
      else if (sum > 0) right--;
      else {
        // sum = 0인 경우이므로 정답 및 스킵 처리
        result.push([arr[i], arr[left], arr[right]]);
        while (left < right && arr[left] === arr[left + 1]) left++;
        while (left < right && arr[right] === arr[right - 1]) right--;
        left++;
        right--;
      }
    }
  }
  return result;
}
const arr = [-1, 0, 1, 2, -1, -4];
// const result = ThreeSum(arr);
console.log(arr);
// console.log(result);

export function ThreeSumTest(arr) {
  const result = [];
  //정렬하기
  arr.sort();
  //for문
  for (let i = 0; i < arr.length; i++) {
    //중복된값 스킵if
    if (i > 0 && arr[i] === arr[i - 1]) continue;
    //left right 초기화
    // right는 항상 맨끝
    // left는 for문보다 +1
    let left = i + 1;
    let right = arr.length - 1;
    // while문 left가 right보다 작을때
    while (left < right) {
      //간격을 좁혀가며 합 계산
      const sum = arr[i] + arr[left] + arr[right];
      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        //답을 찾으면 left,right 양옆의 값을 확인해서 같을시 포인터 이동
        result.push([arr[i], arr[left], arr[right]]);
        while (left < right && arr[left] === arr[left + 1]) left++;
        while (left < right && arr[right] === arr[right - 1]) right--;
        //포인터 이동
        left++;
        right--;
      }
    }
    return result;
  }

  console.log(arr);
}
console.log(ThreeSumTest(arr));
//정렬하기
//for문
//중복된값 스킵if
//left right 초기화
// right는 항상 맨끝
// left는 for문보다 +1

// while문 left가 right보다 작을때
//간격을 좁혀가며 합 계산
//답을 찾으면 left,right 양옆의 값을 확인해서 같을시 포인터 이동
//포인터 이동
