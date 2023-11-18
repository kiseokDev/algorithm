import { createLinkedList } from './LinkedList';

//리스트 뒤집기
export const reverseLinkedList = head => {
  //반복구조로 뒤집기
  let prev = null;
  let next = null;
  while (head) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
};

export const reverseList = arr => {
  const result = [];
  while (arr.length) {
    result.push(arr.pop());
  }
  return result;
};

// const head = [1, 2, 3, 4, 5];
const head = [1, 2, 3];
const linkedList = createLinkedList(head);
