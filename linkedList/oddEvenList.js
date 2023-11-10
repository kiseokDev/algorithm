//홀짝연결리스트
//연결 리스트를 홀수 번째 노드 다음에 짝수 번째 노드가 오도록 재구성하라. 공간 복잡도 O(1), 시간 복잡도 O(n)에 풀이하라.
//입력 : 1->2->3->4->5->NULL
//출력 : 1->3->5->2->4->NULL
//입력 : 2->1->3->5->6->4->7->NULL
//출력 : 2->3->6->7->1->5->4->NULL
import { createLinkedList, linkedListToArray } from './LinkedList';

export const oddEvenList = head => {
  if (!head) return head;
  let odd = head;
  let even = head.next;
  let evenHead = head.next;
  while (even && even.next) {
    odd.next = odd.next.next;
    even.next = even.next.next;

    odd = odd.next;
    even = even.next;
  }
  odd.next = evenHead;
  return head;
};

export const oddEvenListWithArray = arr => {
  const odd = [];
  const even = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) odd.push(arr[i]);
    else even.push(arr[i]);
  }
  return [...odd, ...even];
};
