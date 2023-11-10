// import { ThreeSumTest } from '../threeSum';
import { threeSum } from './practiceAgain';

describe('ThreeSumTest', () => {
  test('returns all unique triplets that sum up to zero', () => {
    const arr = [-1, 0, 1, 2, -1, -4];
    const expected = [
      [-1, -1, 2],
      [-1, 0, 1],
    ];
    expect(threeSum(arr)).toEqual(expected);
  });

  test('returns empty array when no triplets sum up to zero', () => {
    const arr = [1, 2, 3, 4, 5];
    const expected = [];
    expect(threeSum(arr)).toEqual(expected);
  });

  test('returns empty array when input array has less than three elements', () => {
    const arr = [1, 2];
    const expected = [];
    expect(threeSum(arr)).toEqual(expected);
  });
});
