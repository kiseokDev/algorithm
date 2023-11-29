//  숫자 집합 candidates를 조합하여 합이 target이 되는 원소를 나열하라. 각 원소는 중복으로 나열 가능하다.
//  candidates = [2, 3, 6, 7], target = 7
//  출력 : [[2,2,3],[7]]

function combinationSum(candidates, target) {
  let result = [];
  let prevNums = [];

  function dfs(start, sum) {
    if (sum > target) return;
    if (sum === target) {
      result.push([...prevNums]);
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      prevNums.push(candidates[i]);
      dfs(i, sum + candidates[i]);
      prevNums.pop();
    }
  }

  dfs(0, 0);
  return result;
}

console.log(combinationSum([2, 3, 6, 7], 7));
