// Helper function to convert a linked list to an array
import { mergeTwoLinkedLists } from '../mergeTwoSortedLists';
import { mergeTwoLists } from './pratice';
import { createLinkedList, linkedListToArray } from '../LinkedList';

describe('mergeTwoLists', () => {
  test('merges two sorted linked lists into one sorted linked list', () => {
    const l1 = [1, 2, 4];
    const l2 = [1, 3, 4];
    const expected = [1, 1, 2, 3, 4, 4];
    expect(mergeTwoLists(l1, l2)).toEqual(expected);
  });

  test('returns the non-empty list when one list is empty', () => {
    const l1 = [];
    const l2 = [1, 2, 3];
    const expected = [1, 2, 3];
    expect(mergeTwoLists(l1, l2)).toEqual(expected);
    expect(mergeTwoLists(l2, l1)).toEqual(expected);
  });

  test('returns null when both lists are empty', () => {
    const l1 = [];
    const l2 = [];
    expect(mergeTwoLists(l1, l2)).toEqual([]);
  });
});

describe('mergeTwoLists', () => {
  test('merges two sorted linked lists into one sorted linked list', () => {
    const l1 = createLinkedList([1, 2, 4]);
    const l2 = createLinkedList([1, 3, 4]);
    const expected = [1, 1, 2, 3, 4, 4];
    expect(linkedListToArray(mergeTwoLinkedLists(l1, l2))).toEqual(expected);
  });

  test('returns the non-null list when one list is null', () => {
    const l1 = null;
    const l2 = createLinkedList([1, 3, 4]);
    const expected = [1, 3, 4];
    expect(linkedListToArray(mergeTwoLinkedLists(l1, l2))).toEqual(expected);
  });

  test('returns null when both lists are null', () => {
    const l1 = null;
    const l2 = null;
    expect(mergeTwoLinkedLists(l1, l2)).toBe(null);
  });
});
