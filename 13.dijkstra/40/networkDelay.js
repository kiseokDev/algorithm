//  k부터 출발해 모든 노드가 신호를 받을 수 있는 시간을 계산하라. 불가능할 경우 -1을 리턴하라
// 입력값(u,v,w)는 각각 출발지, 도착지, 소요 시간으로 구성되며, 전체 노드의 개수는 n으로 입력 받는다.

// 입력값 : times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2

// 두가지 사항 판별
// 1) 모든 노드가 신호를 시간 == 가장 오래 걸리는 노드까지의 시간 8
// 2) 모든 노드에 도달할 수 있는지 여부

function networkDelay(times, N, K) {
  const graph = new Map();
  //그래프 인접 리스트 구성
  for (let [u, v, w] of times) {
    if (!graph.has(u)) graph.set(u, []);
    graph.get(u).push([v, w]);
  }
  // 큐 변수 : [(소요시간, 정점)]
  const Q = [[0, K]];
  const dist = new Map();
  //우선순위 큐 최솟값 기준으로 정접까지 최단 경로 삽입
  while (Q.length) {
    Q.sort((a, b) => a[0] - b[0]);
    let [time, node] = Q.shift();
    if (!dist.has(node)) {
      dist.set(node, time);
      if (graph.has(node)) {
        for (let [v, w] of graph.get(node)) {
          Q.push([time + w, v]);
        }
      }
    }
  }

  if (dist.size === N) {
    return Math.max(...dist.values());
  } else {
    return -1;
  }
}

console.log(
  networkDelay(
    [
      [2, 1, 1],
      [2, 3, 1],
      [3, 4, 1],
    ],
    4,
    2
  )
);

console.log(
  networkDelay(
    [
      [3, 1, 5],
      [3, 2, 2],
      [2, 1, 2],
      [3, 4, 1],
      [4, 5, 1],
      [5, 6, 1],
      [6, 7, 1],
      [7, 8, 1],
      [8, 1, 1],
    ],
    8,
    3
  )
);
