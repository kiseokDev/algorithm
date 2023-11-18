// FILEPATH: /home/prime/workspace/algorithm/array/addTwoNumbers.test.js
import { addTwoNumbersWithLinkedList } from '../addTwoNums';
import { addTwoNumbers } from './pratice';
import { createLinkedList } from '../LinkedList';

describe('addTwoNumbers', () => {
  test('adds two numbers represented as arrays', () => {
    const l1 = [2, 4, 3];
    const l2 = [5, 6, 4];
    const expected = [7, 0, 8];
    expect(addTwoNumbers(l1, l2)).toEqual(expected);
  });
});

describe('addTwoNumbersWithLinkedList', () => {
  test('adds two numbers represented as linked lists', () => {
    const l1 = createLinkedList([2, 4, 3]);
    const l2 = createLinkedList([5, 6, 4]);
    const expected = [7, 0, 8];
    expect(addTwoNumbersWithLinkedList(l1, l2)).toEqual(expected);
  });
});
