const findCheapestPrice = (flights, src, dst, K) => {
  const graph = {};
  for (let [from, to, price] of flights) {
    if (graph[from]) {
      graph[from].push([to, price]);
    } else {
      graph[from] = [[to, price]];
    }
  }

  const Q = [[0, src, K + 1]];
  while (Q.length) {
    const [price, node, stop] = Q.shift();
    if (node === dst) return price;
    if (stop > 0) {
      if (!graph[node]) continue;
      for (let [v, w] of graph[node]) {
        Q.push([price + w, v, stop - 1]);
      }
    }
    Q.sort((a, b) => a[0] - b[0]);
  }
  return -1;
};

console.log(
  findCheapestPrice(
    [
      [0, 1, 100],
      [1, 2, 100],
      [0, 2, 500],
    ],
    0,
    2,
    0
  )
);
