//한번의 거래로 낼 수 있는 최대 이익을 산출하라
export function maxProfit(prices) {
  let max = 0;
  let min = prices[0];

  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }
  return max;
}
const input = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(input));
// output: 5

const test = prices => {
  let profit = 0;
  let min = prices[0];
  for (const stock of prices) {
    min = Math.min(min, stock);
    profit = Math.max(profit, stock - min);
  }
  return profit;
};

console.log(test(input));
