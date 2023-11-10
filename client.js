function solution(carrotCoords) {
  // 당근이 하나도 없는 경우, 울타리가 필요 없습니다.
  if (carrotCoords.length === 0) {
    return 0;
  }

  let minX = carrotCoords[0][0];
  let maxX = carrotCoords[0][0];
  let minY = carrotCoords[0][1];
  let maxY = carrotCoords[0][1];

  // 당근 좌표를 순회하면서 최소, 최대 X 및 Y 좌표를 찾습니다.
  carrotCoords.forEach(([x, y]) => {
    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);
    minY = Math.min(minY, y);
    maxY = Math.max(maxY, y);
  });

  // 울타리의 길이를 계산합니다.
  // 울타리는 당근을 포함해야 하므로, 각 좌표에 1의 여유를 더해줍니다.
  const xAxisLength = maxX - minX + 2; // 여기서 +2는 양쪽에 여유분
  const yAxisLength = maxY - minY + 2; // 여기서 +2는 양쪽에 여유분

  // 울타리의 총 길이를 반환합니다.
  return (xAxisLength + yAxisLength) * 2;
}

console.log(
  solution([
    [2, 2],
    [3, 3],
    [4, 4],
    [5, 3],
    [6, 2],
  ])
);
