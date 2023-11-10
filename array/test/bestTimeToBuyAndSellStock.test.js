// FILEPATH: /home/prime/workspace/algorithm/array/BestTimeToBuyAndSellStock.test.js
// import { maxProfit } from '../bestTimeToBuyAndSellStock';
import { maxProfit } from './practiceAgain';

describe('maxProfit', () => {
  test('returns the maximum profit that can be achieved', () => {
    const prices = [7, 1, 5, 3, 6, 4];
    const expected = 5;
    expect(maxProfit(prices)).toEqual(expected);
  });

  test('returns 0 when no profit can be made', () => {
    const prices = [7, 6, 4, 3, 1];
    const expected = 0;
    expect(maxProfit(prices)).toEqual(expected);
  });

  test('returns 0 when the array is empty', () => {
    const prices = [];
    const expected = 0;
    expect(maxProfit(prices)).toEqual(expected);
  });
});
