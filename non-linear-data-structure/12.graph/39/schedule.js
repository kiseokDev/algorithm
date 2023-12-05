// 0을 완료하기 위해서는 1을 끝애야 한다는 것을 [0,1] 쌍으로 표현하는 n 개의 코스가 있다.
// 코스 개수 n과 이 쌍들을 입력받았을 때 모든 코스가 완료 가능한지 판별하라.
// Input: 2, [[1,0]]
// Output: true
// 설명 : 2개의 코스가 있으며, 1을 완료하기 위해서는 0을 끝내면 된다. 따라서 가능가능

// Input: 2, [[1,0],[0,1]]
// Output: false
// 설명 : 2개의 코스가 있으며, 1을 완료하기 위해서는 0을 끝내야 하고, 0을 완료하기 위해서는 1을 끝내야 한다. 따라서 불가능

// DFS로 순환 구조 판별
function canFinish(numCourses, prerequisites) {
  let graph = new Map();

  //그래프 구성
  for (let [x, y] of prerequisites) {
    if (graph.has(x)) {
      graph.get(x).push(y);
    } else {
      graph.set(x, [y]);
    }
  }

  // 순환 구조 판별
  let traced = new Set();
  // 이미 방문했던 노드인지 판별
  let visited = new Set();

  function dfs(n) {
    //  순환 구조이면 False
    if (traced.has(n)) return false;
    // 이미 방문했던 노드이면 True
    if (visited.has(n)) return true;

    traced.add(n);
    for (let y of graph.get(n) || []) {
      if (!dfs(y)) return false;
    }
    // 탐색 종료 후 순환 노드 삭제
    traced.delete(n);
    visited.add(n);
    return true;
  }
  // 순환 구조 판별
  for (let x of graph.keys()) {
    if (!dfs(x)) return false;
  }
  return true;
}

console.log(
  canFinish(2, [
    [1, 0],
    [0, 1],
  ])
);

// # 가지치기를 이용한 최적화
// 다익스트라 dijkstra
