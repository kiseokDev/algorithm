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

// [1,2,3]에 대해 dfs를 실행한다 (dfs1)
// 1을 제거하고 prevNum를 [1]로 업데이트

// 남은 [2,3] 에대해 dfs를 실행한다(dfs2)
// 2 를 제거하고 prevNum에 [1,2]로 업데이트
// 남은 [3]에 대해 dfs를 실행한다(dfs3)

// 3을 제거하고 prevNum에 [1,2,3]으로 업데이트
// 남은 []에 대해 dfs를 실행한다(dfs4)

// nums.length === 0 이므로 result에 [1,2,3]을 push한다
// nums.length === 0 이므로 dfs4 종료

// dfs3에서 prevNum.pop()을 실행하여 prevNum이 [1,2]가 된다
// dfs3 종료

// dfs2에서 prevNum.pop()을 실행하여 prevNum이 [1]이 된다
// dfs2 에서 [2,3]에 대한 두번째 for문 시작
// 3을 제거하고 prevNum에 [1,3]으로 업데이트
// 남은 [2]에 대해 dfs를 실행한다(dfs2-2)

// 2를 제거하고 prevNum에 [1,3,2]으로 업데이트
// 남은 []에 대해 dfs를 실행한다(dfs2-3)
