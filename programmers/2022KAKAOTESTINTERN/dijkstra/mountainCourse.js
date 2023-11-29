function maxMountainIntense(n, paths, gates, summits) {
  const graph = new Map();

  for (let [i, j, w] of paths) {
    if (!graph.has(i)) graph.set(i, []);
    if (!graph.has(j)) graph.set(j, []);
    graph.get(i).push([j, w]);
    graph.get(j).push([i, w]);
  }
  // 산봉우리와 게이트 정보를 set 형태로 변환
  const summitSet = new Set(summits);
  const gateSet = new Set(gates);

  // 큐 변수
  // 큐 초기화: 출입구에서 시작하는 경로들
  const Q = gates.map(gate => [gate, 0, new Set([gate])]); // [현재 위치, 현재 경로의 최대 intensity, 방문한 지점들]
  const dist = new Map();
  //   // 결과를 저장할 변수 초기화 (산봉우리 번호, 최소 intensity)
  // 최소 intensity = 무한대
  // 선택된 산봉우리 = -1

  // // 큐에 있는 경로를 순회하면서 탐색
  // while 큐가 비어있지 않은 동안:
  //     현재 경로, 현재 intensity, 방문한 지점들, 산봉우리 방문 여부를 큐에서 꺼낸다

  //     // 현재 경로의 마지막 지점을 확인
  //     현재 위치가 출입구이고 산봉우리를 방문한 경우:
  //         해당 경로의 intensity가 최소 intensity보다 작은 경우:
  //             최소 intensity를 갱신하고, 해당 산봉우리 번호를 저장
  //         다음 경로를 계속 탐색

  //     현재 위치에서 이동 가능한 모든 지점을 순회:
  //         이동할 지점이 이미 방문한 지점이 아니라면:
  //             새로운 경로의 intensity를 계산 (현재 intensity와 새로운 경로의 이동 시간 중 최대값)
  //             산봉우리를 방문했는지 여부를 업데이트
  //             새로운 경로 (이동할 지점, 새로운 intensity, 새로운 방문 지점 집합, 산봉우리 방문 여부)를 큐에 추가

  // // 최소 intensity 경로를 찾음
  // 최소 intensity와 해당 산봉우리 번호를 반환
}

console.log(
  maxMountainIntense(
    6,
    [
      [1, 2, 3],
      [2, 3, 5],
      [2, 4, 2],
      [2, 5, 4],
      [3, 4, 4],
      [4, 5, 3],
      [4, 6, 1],
      [5, 6, 1],
    ],
    [1, 3],
    [5],
    [5, 3]
  )
);
