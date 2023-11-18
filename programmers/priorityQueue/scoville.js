const makeFoodsSpicy = (scoville, K) => {
  const stack = [];
  let result = 0;
  scoville.sort((a, b) => a - b);

  while (scoville.length > 0) {
    stack.push(scoville.shift());
    result++;
    if (stack.pop() + scoville[0] * 2 >= K) {
      return result;
    }
  }
  if (scoville[0] < K) return -1;
};

console.log(makeFoodsSpicy([1, 2, 3, 9, 10, 12], 7));
