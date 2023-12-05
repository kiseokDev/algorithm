// [From,to]로 구성된 항공권 목록을 이룔해 JFK에서 출발하는 여행 일정을 구성하라.
// 여러 일정이 있는 경우 사전 어휘순으로 방문한다.
// Input: tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
// Output: ["JFK","MUC","LHR","SFO","SJC"]
// Input2: tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
// Output2: ["JFK","ATL","JFK","SFO","ATL","SFO"]

function findIterinerary(tickets) {
  const graph = {};
  const result = [];

  // 그래프 구성
  // 그래프 예) {JFK: ["MUC", "SFO"], MUC: ["LHR", "SFO"], SFO: ["SJC"]}
  for (let [from, to] of tickets.sort((a, b) => b - a)) {
    if (graph[from]) {
      graph[from].push(to);
    } else {
      graph[from] = [to];
    }
  }
  graph;

  function dfs(from) {
    // 첫번쨰 값을 읽어 어휘 순 방문
    const to = graph[from];
    while (to && to.length) {
      dfs(to.pop());
    }
    result.push(from);
    result;
  }

  dfs('JFK');
  return result.reverse();
}

console.log(
  findIterinerary([
    ['JFK', 'SFO'],
    ['JFK', 'ATL'],
    ['SFO', 'ATL'],
    ['ATL', 'JFK'],
    ['ATL', 'SFO'],
  ])
);
// console.log(
//   findIterinerary([
//     ['MUC', 'LHR'],
//     ['JFK', 'MUC'],
//     ['SFO', 'SJC'],
//     ['LHR', 'SFO'],
//   ])
// );
