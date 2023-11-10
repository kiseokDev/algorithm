// FILEPATH: /home/prime/workspace/algorithm/array/trappingRain.test.js
// import { trap } from '../trappinRain';
import { trap } from './practiceAgain';

describe('trap', () => {
  test('returns the total amount of rainwater that can be trapped', () => {
    const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
    const expected = 6;
    expect(trap(height)).toEqual(expected);
  });

  test('returns 0 when no rainwater can be trapped', () => {
    const height = [0, 2, 0];
    const expected = 0;
    expect(trap(height)).toEqual(expected);
  });

  test('returns 0 when the array is empty', () => {
    const height = [];
    const expected = 0;
    expect(trap(height)).toEqual(expected);
  });
});
