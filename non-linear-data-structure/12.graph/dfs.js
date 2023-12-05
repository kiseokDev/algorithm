function recursiveDFS(graph, start, visited = new Set(), path = []) {
  visited.add(start);
  path.push(start);
  console.log(start);
  for (const neighbor of graph[start]) {
    if (!visited.has(neighbor)) {
      recursiveDFS(graph, neighbor, visited, path);
    }
  }
  return path;
}

function iterativeDFS(graph, start) {
  const visited = new Set();
  const stack = [start];
  const path = [];

  while (stack.length > 0) {
    const vertex = stack.pop();
    // 스택에서 정점을 빼서 방문했는지 확인하고 방문하지 않았으면 방문처리하고 경로에 추가한다
    //그리고 해당 정점에 인접한 정점들을 스택에 추가한다
    if (visited.has(vertex)) continue;
    visited.add(vertex);
    path.push(vertex);
    console.log(vertex);
    for (const neighbor of graph[vertex]) {
      stack.push(neighbor);
    }
  }
  return path;
}
function iterativeBFS(graph, start) {
  const visited = new Set();
  const queue = [start];
  const path = [];

  while (queue.length > 0) {
    const vertex = queue.shift();
    if (visited.has(vertex)) continue;
    visited.add(vertex);
    path.push(vertex);
    console.log(vertex);
    for (const neighbor of graph[vertex]) {
      queue.push(neighbor);
    }
  }
  return path;
}

const graph = {
  1: [2, 3, 4],
  2: [5],
  3: [5],
  4: [],
  5: [6, 7],
  6: [],
  7: [3],
};

console.log(recursiveDFS(graph, 1));
console.log(iterativeDFS(graph, 1));
console.log(iterativeBFS(graph, 1));
