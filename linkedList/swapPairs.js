//연결 리스트를 입력받아 pair 단위로 스왑하라
// input: 1->2->3->4
//output: 2->1->4->3

import { createLinkedList, linkedListToArray } from './LinkedList';

// output: 2->1->4->3
export const swapPairs = head => {
  //반복구조로 스왑
  let node = head;
  while (node && node.next) {
    const next = node.next;
    const temp = node.val;
    node.val = next.val;
    next.val = temp;
    node = next.next;
  }
  return head;
};

export const swapPairsWithArray = arr => {
  //배열로 스왑
  const result = [];
  for (let i = 0; i < arr.length; i += 2) {
    result.push(arr[i + 1]);
    result.push(arr[i]);
  }
  return result;
};

const test = arr => {
  return arr.map((num, idx) => (idx % 2 === 0 ? arr[idx + 1] : arr[idx - 1]));
};

const input = [1, 2, 3, 4];
console.log(test(input));
