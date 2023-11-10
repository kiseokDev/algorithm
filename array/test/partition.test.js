// FILEPATH: /home/prime/workspace/algorithm/array/refectoredArrayPairSum.test.js
import { refectoredArrayPairSum, testPairSum } from '../partition';
import { arrayPairSum } from './practiceAgain';

describe('refectoredArrayPairSum', () => {
  test('returns the sum of every second number in a sorted array', () => {
    const nums = [1, 4, 3, 2];
    const expected = 4;
    expect(arrayPairSum(nums)).toEqual(expected);
  });

  test('returns 0 when the array is empty', () => {
    const nums = [];
    const expected = 0;
    expect(arrayPairSum(nums)).toEqual(expected);
  });

  test('returns the correct sum when the array has one element', () => {
    const nums = [7];
    const expected = 7;
    expect(arrayPairSum(nums)).toEqual(expected);
  });
});
