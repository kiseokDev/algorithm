// FILEPATH: /home/prime/workspace/algorithm/array/oddEvenList.test.js
import { oddEvenListWithArray, oddEvenList } from '../oddEvenList';
import { createLinkedList, linkedListToArray } from '../LinkedList';
// import { oddEvenListWithArray, oddEvenList } from './pratice';

describe('oddEvenListWithArray', () => {
  test('rearranges an array so that all odd-indexed elements come before all even-indexed elements', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const expected = [1, 3, 5, 2, 4, 6];
    expect(oddEvenListWithArray(arr)).toEqual(expected);
  });
});

describe('oddEvenList', () => {
  test('rearranges a linked list so that all odd-indexed nodes come before all even-indexed nodes', () => {
    const head = createLinkedList([1, 2, 3, 4, 5, 6]);
    const expected = [1, 3, 5, 2, 4, 6];
    expect(linkedListToArray(oddEvenList(head))).toEqual(expected);
  });
});
