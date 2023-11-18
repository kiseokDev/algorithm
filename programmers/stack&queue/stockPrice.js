//초 단위로 기록된 주식가격이 담긴 배열 prices가 매개변수로 주어질 때, 가격이 떨어지지 않은 기간은 몇 초인지를 return 하도록 solution 함수를 완성하세요.
function solution(prices) {
  let length = prices.length;
  let answer = new Array(length).fill(0);
  let stack = [];

  for (let i = 0; i < length; i++) {
    // 스택이 비어있지 않고, 현재 가격이 스택 top의 가격보다 낮은 경우
    while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
      let index = stack.pop();
      answer[index] = i - index;
    }
    stack.push(i);
  }

  // 가격이 떨어지지 않고 끝까지 도달한 경우
  while (stack.length > 0) {
    let index = stack.pop();
    answer[index] = length - 1 - index;
  }

  return answer;
}

console.log(solution([1, 2, 3, 2, 3])); // [4, 3, 1, 1, 0]

const test = prices => {
  const length = prices.length;
  const answer = new Array(length).fill(0);
  let stack = [];

  for (let i = 0; i < length; i++) {
    //주식가격이 떨어졌을때
    while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
      // 스택에서 인덱스를 꺼낸다.
      let priceDropIndex = stack.pop();
      // 가격이 떨어지기 전까지 가격이 유지되었던 시간을 나타내는 인덱스
      answer[priceDropIndex] = i - priceDropIndex;
    }
    //주식가격이 떨어지지 않았을때 스택에 인덱스를 넣는다,
    //스택에는 가격이 떨어지지 않은 기간을 구하기 위해 인덱스를 넣는다.
    stack.push(i);
  }

  //주식가격이 떨어지지 않고 끝가지 도달한 경우
  while (stack.length > 0) {
    let priceDropIndex = stack.pop();
    answer[priceDropIndex] = length - 1 - priceDropIndex;
  }
  return answer;
};
console.log(test([1, 2, 3, 2, 3])); // [4, 3, 1, 1, 0]
