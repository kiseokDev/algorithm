function numberOflands(grid) {
  //dfs로 그래프 탐색
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    for (let j = 0; j < row.length; j++) {
      const col = row[j];
      if (col === '1') {
        count++;
        dfs(grid, i, j);
      }
    }
  }
  return count;
}

function dfs(grid, i, j) {
  //범위를 벗어나거나, 땅이 아닌 경우 종료
  if (
    i < 0 ||
    j < 0 ||
    i >= grid.length ||
    j >= grid[i].length ||
    grid[i][j] === '0'
  ) {
    return;
  }
  //방문한 땅은 0으로 변경
  grid[i][j] = '0';
  //동서남북 탐색
  dfs(grid, i + 1, j); //동
  dfs(grid, i - 1, j); //서
  dfs(grid, i, j + 1); //남
  dfs(grid, i, j - 1); //북
}

const grid = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
];

console.log(numberOflands(grid)); //1
