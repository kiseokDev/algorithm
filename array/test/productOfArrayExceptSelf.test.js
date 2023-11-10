// FILEPATH: /home/prime/workspace/algorithm/array/productOfArrayExceptSelf.test.js
// import { productExceptSelf } from '../productOfArrayExceptSelf';
import { productExceptSelf } from './practiceAgain';

describe('productExceptSelf', () => {
  test('returns an array where each element is the product of all the numbers in the array except the one at the same index', () => {
    const nums = [1, 2, 3, 4];
    const expected = [24, 12, 8, 6];
    expect(productExceptSelf(nums)).toEqual(expected);
  });

  test('returns an array of zeros when the input array contains a zero', () => {
    const nums = [0, 1, 2, 3, 4];
    const expected = [24, 0, 0, 0, 0];
    expect(productExceptSelf(nums)).toEqual(expected);
  });

  test('returns an array of ones when the input array contains only ones', () => {
    const nums = [1, 1, 1, 1];
    const expected = [1, 1, 1, 1];
    expect(productExceptSelf(nums)).toEqual(expected);
  });
});
