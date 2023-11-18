import { swapPairs } from '../swapPairs';
import { swapPairsWithArray } from './pratice';
import { createLinkedList, linkedListToArray } from '../LinkedList';
// Helper function to create a linked list from an array

describe('swapPairs', () => {
  test('swaps pairs in a linked list', () => {
    const head = createLinkedList([1, 2, 3, 4]);
    const expected = [2, 1, 4, 3];
    expect(linkedListToArray(swapPairs(head))).toEqual(expected);
  });
});

describe('swapPairsWithArray', () => {
  test('swaps pairs in an array', () => {
    const arr = [1, 2, 3, 4];
    const expected = [2, 1, 4, 3];
    expect(swapPairsWithArray(arr)).toEqual(expected);
  });
});
