export function createLinkedList(arr) {
  const dummyHead = { val: 0, next: null };
  let currentNode = dummyHead;
  for (let val of arr) {
    currentNode.next = { val, next: null };
    currentNode = currentNode.next;
  }
  return dummyHead.next;
}

export function linkedListToArray(node) {
  const result = [];
  while (node !== null) {
    result.push(node.val);
    node = node.next;
  }
  return result;
}

export class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
