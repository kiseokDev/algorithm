import { twoSum } from './practiceAgain';

describe('twoSum', () => {
  test('returns the indices of the two numbers that add up to the target', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const expected = [0, 1];
    expect(twoSum(nums, target)).toEqual(expected);
  });

  test('returns undefined when no two numbers add up to the target', () => {
    const nums = [2, 7, 11, 15];
    const target = 20;
    expect(twoSum(nums, target)).toBeUndefined();
  });

  test('returns undefined when the array is empty', () => {
    const nums = [];
    const target = 1;
    expect(twoSum(nums, target)).toBeUndefined();
  });
});
