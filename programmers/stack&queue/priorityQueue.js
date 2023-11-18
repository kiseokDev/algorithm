//루프돌면서 하나씩 shift 후 구조분해할당
//우선순위 높은거 있는지 확인
//있으면 뒤로 push
//아니면 없애버려(근데 location이랑 같은지 확인)

function calculateProcessPriorityOrder(priorities, location) {
  let queue = priorities.map((priority, index) => ({ index, priority }));
  let order = 0;
  priorities = priorities.sort((a, b) => b - a);
  queue;
  priorities;

  while (queue.length) {
    let current = queue.shift();
    current;
    console.log(priorities[order]);
    if (current.priority < priorities[order]) {
      queue.push(current);
    } else {
      order++;
      if (current.index === location) {
        return order;
      }
    }
  }
}

console.log(calculateProcessPriorityOrder([2, 1, 3, 2], 2)); // 1
// console.log(calculateProcessPriorityOrder([1, 1, 9, 1, 1, 1], 0)); // 5
