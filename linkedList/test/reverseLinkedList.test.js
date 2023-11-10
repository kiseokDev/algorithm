import { createLinkedList, linkedListToArray } from '../LinkedList';
import { reverseLinkedList, reverseList } from '../reverseLinkedList';
// import { reverseLinkedList, reverseList } from './pratice';

describe('reverseLinkedList', () => {
  test('reverses a linked list', () => {
    const head = createLinkedList([1, 2, 3, 4, 5]);
    const expected = [5, 4, 3, 2, 1];
    expect(linkedListToArray(reverseLinkedList(head))).toEqual(expected);
  });

  test('returns null for an empty linked list', () => {
    const head = createLinkedList([]);
    expect(reverseLinkedList(head)).toBe(null);
  });

  test('returns the same node for a linked list with one element', () => {
    const head = createLinkedList([1]);
    expect(linkedListToArray(reverseLinkedList(head))).toEqual([1]);
  });
});

describe('reverseList', () => {
  test('reverses a list', () => {
    const head = [1, 2, 3, 4, 5];
    const expected = [5, 4, 3, 2, 1];
    expect(reverseList(head)).toEqual(expected);
  });

  test('returns null for an empty list', () => {
    const head = [];
    expect(reverseList(head)).toEqual([]);
  });

  test('returns the same node for a list with one element', () => {
    const head = [1];
    expect(reverseList(head)).toEqual([1]);
  });
});
