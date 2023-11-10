//역순으로 저장된 연결 리스트의 숫자를 더하라
// input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// output: 7 -> 0 -> 8
// explanation: 342 + 465 = 807

import { createLinkedList, linkedListToArray } from './LinkedList';

//자료형 반환
export const addTwoNumbers = (l1, l2) => {
  const sum = Number(l1.reverse().join('')) + Number(l2.reverse().join(''));
  return sum.toString().split('').reverse().map(Number);
};

export const addTwoNumbersWithLinkedList = (l1, l2) => {
  let result = [];
  let sum = 0;
  let carry = 0;
  while (l1 || l2) {
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = Math.floor(sum / 10);
    result.push(sum % 10);
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  if (carry) {
    result.push(carry);
  }
  return result;
};

// console.log(addTwoNumbers([2, 4, 3], [5, 6, 4])); //	[7, 0, 8]
// console.log(
//   addTwoNumbersWithLinkedList(
//     createLinkedList([2, 4, 3]),
//     createLinkedList([5, 6, 4])
//   )
// );

const test = (l1, l2) => {
  let result = [];
  let carry = 0;
  let sum = 0;
  while (l1 || l2) {
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = Math.floor(sum / 10);
    result.push(sum % 10);
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  if (carry) result.push(carry);
  return result;
};

// console.log(test(createLinkedList([2, 4, 3]), createLinkedList([5, 6, 4])));
