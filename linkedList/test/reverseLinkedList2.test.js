// FILEPATH: /home/prime/workspace/algorithm/linkedList/test/reverseLinkedList2.test.js
import { reverseBetween } from '../reverseLinkedList2';
import { createLinkedList, linkedListToArray } from '../LinkedList';
import { reverseBetweenWithArray } from './pratice';

describe('reverseBetween', () => {
  test('reverses the nodes of a linked list from position m to n', () => {
    const head = createLinkedList([1, 2, 3, 4, 5]);
    const expected = [1, 4, 3, 2, 5];
    expect(linkedListToArray(reverseBetween(head, 2, 4))).toEqual(expected);
  });

  test('returns the same list when m equals n', () => {
    const head = createLinkedList([1, 2, 3, 4, 5]);
    const expected = [1, 2, 3, 4, 5];
    expect(linkedListToArray(reverseBetween(head, 3, 3))).toEqual(expected);
  });

  test('reverses the entire list when m is 1 and n is the length of the list', () => {
    const head = createLinkedList([1, 2, 3, 4, 5]);
    const expected = [5, 4, 3, 2, 1];
    expect(linkedListToArray(reverseBetween(head, 1, 5))).toEqual(expected);
  });
});

describe('reverseBetweenWithArray', () => {
  test('reverses the elements of an array from index m to n', () => {
    const arr = [1, 2, 3, 4, 5];
    const expected = [1, 4, 3, 2, 5];
    expect(reverseBetweenWithArray(arr, 2, 4)).toEqual(expected);
  });

  test('returns the same array when m equals n', () => {
    const arr = [1, 2, 3, 4, 5];
    const expected = [1, 2, 3, 4, 5];
    expect(reverseBetweenWithArray(arr, 3, 3)).toEqual(expected);
  });

  test('reverses the entire array when m is 1 and n is the length of the array', () => {
    const arr = [1, 2, 3, 4, 5];
    const expected = [5, 4, 3, 2, 1];
    expect(reverseBetweenWithArray(arr, 1, 5)).toEqual(expected);
  });
});
