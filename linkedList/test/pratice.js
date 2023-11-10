// 리스트가 palindrome인지 확인하라
export const isPalindromeUsingStack = arr => {
  const stack = [...arr];
  for (let i = 0; i < arr.length; i++) {
    if (stack.pop() !== arr[i]) {
      return false;
    }
  }
  return true;
};
//---------------------------------------------------------
// 머지 소트
export const mergeTwoLinkedLists = (l1, l2) => {};
export const mergeTwoLists = (arr1, arr2) => {
  return [...arr1, ...arr2].sort();
};
//---------------------------------------------------------
//리스트 뒤집기
export const reverseLinkedList = head => {};
export const reverseList = arr => {
  return arr.reverse();
};
//---------------------------------------------------------
//역순으로 저장된 연결 리스트의 숫자를 더하라
export const addTwoNumbersWithLinkedList = (l1, l2) => {};
export const addTwoNumbers = (arr1, arr2) => {
  const sum = (Number(arr1.join('')) + Number(arr2.join('')))
    .toString()
    .split('')
    .reverse()
    .map(Number);
  return sum;
};
//---------------------------------------------------------
//연결 리스트를 입력받아 pair 단위로 스왑하라
export const swapPairsWithArray = arr =>
  arr.map((_, i, a) => (i % 2 === 0 ? a[i + 1] : a[i - 1]));

export const swapPairs = head => {};
//---------------------------------------------------------
//연결 리스트를 홀수 번째 노드 다음에 짝수 번째 노드가 오도록 재구성하라. 공간 복잡도 O(1), 시간 복잡도 O(n)에 풀이하라.
export const oddEvenList = head => {};
export const oddEvenListWithArray = arr => {
  const odd = [];
  const even = [];
  arr.forEach(num => {
    if (num % 2 === 0) even.push(num);
    if (num % 2 === 1) odd.push(num);
  });
  return [...odd, ...even];
};
//---------------------------------------------------------
//인덱스m에서 n까지 역순으로 만들어라 인덱스는 1부터 시작한다.
export const reverseBetween = (head, m, n) => {};
export const reverseBetweenWithArray = (arr, m, n) => {
  return [
    ...arr.slice(0, m - 1),
    ...arr.slice(m - 1, n).reverse(),
    ...arr.slice(n),
  ];
};
//---------------------------------------------------------
//---------------------------------------------------------
// export const isPalindromeUsingStack = arr => {};
// export const isPalinDrome = head => {};
// //---------------------------------------------------------
// export const mergeTwoLinkedLists = (l1, l2) => {};
// export const mergeTwoLists = (arr1, arr2) => {};
// //---------------------------------------------------------
// export const reverseLinkedList = head => {};
// export const reverseList = arr => {};
// //---------------------------------------------------------
// export const addTwoNumbersWithLinkedList = (l1, l2) => {};
// export const addTwoNumbers = (arr1, arr2) => {};
// //---------------------------------------------------------
// export const swapPairsWithArray = arr => {};
// export const swapPairs = head => {};
// //---------------------------------------------------------
// export const oddEvenList = head => {};
// export const oddEvenListWithArray = arr => {};
// //---------------------------------------------------------
// export const reverseBetween = (head, m, n) => {};
// export const reverseBetweenWithArray = (arr, m, n) => {};
