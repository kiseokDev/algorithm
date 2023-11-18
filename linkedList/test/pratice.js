//--------------------------------------------
//--------------------------------------------
//--------------------------------------------
//--------------------------------------------
//--------------------------------------------
//--------------------------------------------
// 리스트가 palindrome인지 확인하라
//input : 1->2
//output : false
//input : 1->2->2->1
//output : true
export const isPalindromeUsingStackTest = arr => {
  const stack = [...arr];

  for (const ele of arr) {
    if (ele !== stack.pop()) {
      return false;
    }
  }
  return true;
};
// export const isPalinDrome = head => {};
// //---------------------------------------------------------
// 두리스트 합치기
// export const mergeTwoLinkedLists = (l1, l2) => {};
export const mergeTwoListsTest = (arr1, arr2) => {
  return [...arr1, ...arr2].sort();
};
// //---------------------------------------------------------
//리스트 뒤집기
//input : 1->2->3->4->5->NULL
//output : 5->4->3->2->1->NULL
// export const reverseLinkedList = head => {};
export const reverseListTest = arr => arr.reverse();
// //---------------------------------------------------------
//역순으로 저장된 연결 리스트의 숫자를 더하라
//input : (2->4->3) + (5->6->4)
//output : 7->0->8
export const addTwoNumbersTest = (arr1, arr2) => {
  return (Number(arr1.join('')) + Number(arr2.join('')))
    .toString()
    .split('')
    .reverse()
    .map(Number);
};
// //---------------------------------------------------------
//연결 리스트를 입력받아 pair 단위로 스왑하라
//input : 1->2->3->4->NULL
//output : 2->1->4->3->NULL
export const swapPairsWithArrayTest = arr => {
  return arr.map((_, idx, ref) =>
    idx % 2 === 0 ? ref[idx + 1] : ref[idx - 1]
  );
};
// export const swapPairs = head => {};
// //---------------------------------------------------------
//연결 리스트를 홀수 번째 노드 다음에 짝수 번째 노드가 오도록 재구성하라. 공간 복잡도 O(1), 시간 복잡도 O(n)에 풀이하라.
//input : 1->2->3->4->5->NULL
//output : 1->3->5->2->4->NULL
// export const oddEvenList = head => {};
export const oddEvenListWithArrayTest = arr => {
  const odd = [];
  const even = [];
  arr.forEach((num, idx) => (idx % 2 === 0 ? odd.push(num) : even.push(num)));
  return [...odd, ...even];
};
// //---------------------------------------------------------
// 인덱스m에서 n까지 역순으로 만들어라 인덱스는 1부터 시작한다.
//input : 1->2->3->4->5->NULL, m = 2, n = 4
//output : 1->4->3->2->5->NULL
// export const reverseBetween = (head, m, n) => {};
export const reverseBetweenWithArrayTest = (arr, m, n) => {
  return [
    ...arr.slice(0, m - 1),
    ...arr.slice(m - 1, n).reverse(),
    ...arr.slice(n),
  ];
};
//--------------------------------------------
//--------------------------------------------
//--------------------------------------------
//--------------------------------------------
//--------------------------------------------
//--------------------------------------------
// 리스트가 palindrome인지 확인하라
//input : 1->2
//output : false
//input : 1->2->2->1
//output : true
export const isPalindromeUsingStack = arr => {
  const stack = [...arr];
  for (const ele of arr) {
    if (ele !== stack.pop()) {
      return false;
    }
  }
  return true;
};
// //---------------------------------------------------------
// 두리스트 합치기
export const mergeTwoLists = (arr1, arr2) => {
  return [...arr1, ...arr2].sort();
};
// //---------------------------------------------------------
//리스트 뒤집기
//input : 1->2->3->4->5->NULL
//output : 5->4->3->2->1->NULL
export const reverseList = arr => arr.reverse();
// //---------------------------------------------------------
//역순으로 저장된 연결 리스트의 숫자를 더하라
//input : [2, 4, 3] + [5, 6, 4]
//output : 7->0->8
export const addTwoNumbers = (nums1, nums2) =>
  (Number(nums1.join('')) + Number(nums2.join('')))
    .toString()
    .split('')
    .reverse()
    .map(Number);
// console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
// //---------------------------------------------------------
//연결 리스트를 입력받아 pair 단위로 스왑하라
//input : 1->2->3->4->NULL
//output : 2->1->4->3->NULL
export const swapPairsWithArray = arr =>
  arr.map((_, idx, ref) => (idx % 2 === 0 ? ref[idx + 1] : ref[idx - 1]));
// console.log(swapPairsWithArray([1, 2, 3, 4])); //[2,1,4,3]
// //---------------------------------------------------------
//연결 리스트를 홀수 번째 노드 다음에 짝수 번째 노드가 오도록 재구성하라. 공간 복잡도 O(1), 시간 복잡도 O(n)에 풀이하라.
//input : 1->2->3->4->5->NULL
//output : 1->3->5->2->4->NULL
export const oddEvenListWithArray = arr => {
  const odd = [];
  const even = [];
  arr.forEach((ele, idx) => (idx % 2 === 0 ? odd.push(ele) : even.push(ele)));
  return [...odd, ...even];
};
// console.log(oddEvenListWithArray([1, 2, 3, 4, 5])); //[1,3,5,2,4]
// //---------------------------------------------------------
// 인덱스m에서 n까지 역순으로 만들어라 인덱스는 1부터 시작한다.
//input : 1->2->3->4->5->NULL, m = 2, n = 4
//output : 1->4->3->2->5->NULL
export const reverseBetweenWithArray = (arr, m, n) => [
  ...arr.slice(0, m - 1),
  ...arr.slice(m - 1, n).reverse(),
  ...arr.slice(n),
];
// console.log(reverseBetweenWithArray([1, 2, 3, 4, 5], 2, 4)); //[1,4,3,2,5]
