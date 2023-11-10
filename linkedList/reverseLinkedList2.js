//인덱스m에서 n까지 역순으로 만들어라 인덱스는 1부터 시작한다.
//입력 1->2->3->4->5->NULL, m=2, n=4
//출력 1->4->3->2->5->NULL
//입력 5->NULL, m=1, n=1
//출력 5->NULL
import { createLinkedList, linkedListToArray, ListNode } from './LinkedList.js';
export const reverseBetween = (head, m, n) => {
  if (!head || m === n) return head;

  let root = { next: head };
  let start = root;

  for (let i = 1; i < m; i++) {
    start = start.next;
  }

  let end = start.next;
  for (let i = m; i < n; i++) {
    let temp = end.next;
    end.next = temp.next;
    temp.next = start.next;
    start.next = temp;
  }

  return root.next;
};
export const reverseBetweenWithArray = (arr, m, n) => {
  return [
    ...arr.slice(0, m - 1),
    ...arr.slice(m - 1, n).reverse(),
    ...arr.slice(n),
  ];
};

const test = (head, m, n) => {
  //예외처리
  if (!head || m === n) return head;
  let root = { next: null, val: null };
  let start = root;

  //start,end 지정
  for (let i = 1; i < m; i++) {
    start.next = head;
    start = start.next;
    head = head.next;
  }
  let end = start.next;
  for (let i = m; i < n; i++) {
    const temp = start.next;
    start.next = end.next;
    end.next = end.next.next;
    start.next.next = temp;
  }
  return root.next;
  //반복하면서 노드 차례대로 뒤집기
};
