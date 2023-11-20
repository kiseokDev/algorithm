function permute(nums) {
  let result = [];
  let prevNums = [];

  function dfs(nums) {
    if (nums.length === 0) {
      result.push([...prevNums]);
    }
    for (let i = 0; i < nums.length; i++) {
      const newNums = nums.slice();
      const [removed] = newNums.splice(i, 1);
      prevNums.push(removed);
      prevNums;
      dfs(newNums);
      prevNums.pop();
    }
  }

  dfs(nums);
  return result;
}

console.log(permute([1, 2, 3]));

// [1,2,3]에 대해 dfs를 실행한다
// (i=0) [1,2,3] 길이 만큼 dfs 를 실행한다
// 루프만에 첫번째 dfs는 1을 제거하고 [1]을 생성한다
// prevNum에 [1]을 저장한다
// 남은 [2,3] 에대해 dfs를 실행한다
// 2 를 제거하고 prevNum에 [1,2]를 저장한다
// prevNum에 [1,2,3] 이저장되고 result에 [[1,2,3]]로 업데이트된다
// 이때 prevNums.pop()을 실행하면 [1,2]가 된다
//
