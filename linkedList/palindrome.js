// export function isPalinDrome
// 연결 리스트가 팰린드롬 구조인지 판별하라.

// 입력 : 1->2
// 출력 : false
export function isPalinDrome(head) {
  //   연결리스트를 배열로 변환
  const arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] !== arr[right]) {
      return false;
    }
    left++;
    right--;
  }
  const stack = [...arr];

  for (let i = 0; i < arr.length; i++) {
    if (stack.pop() !== arr[i]) {
      return false;
    }
  }

  return true;
}

export const isPalindromeUsingStack = arr => {
  const stack = [...arr];

  for (let i = 0; i < arr.length; i++) {
    if (stack.pop() !== arr[i]) {
      return false;
    }
  }

  return true;
};
