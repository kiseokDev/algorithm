// 전체 수 n을 입력받아 k개의 조합을 리턴하라
// 입력 : n = 4, k = 2
// 출력 : [[2,4],[3,4],[2,3],[1,2],[1,3],[1,4]]

function combine(n, k) {
  let result = [];
  let prevNums = [];

  function dfs(start) {
    if (prevNums.length > k) return;
    if (prevNums.length === k) {
      result.push([...prevNums]);
    }
    for (let i = start; i <= n; i++) {
      prevNums.push(i);
      dfs(i + 1);
      prevNums.pop();
    }
  }

  dfs(1);
  return result;
}
console.time();
console.log(combine(4, 2));
console.timeEnd();
