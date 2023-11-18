//괄호로 된 입력값이 올바른지 판별하라.

import {
  isPalindromeUsingStack,
  isPalindromeUsingStackRefectored,
} from '../linkedList/palindrome';

export const isValidParentheses = s => {
  const stack = [];
  const map = {
    '}': '{',
    ']': '[',
    ')': '(',
  };
  //닫는괄호일경우(in map) : 스택에서 꺼내고  확인(!==틀린경우) 처리
  //여는괄효일경우 : 스택에 추가
  //

  for (const char of s) {
    if (char in map) {
      // 닫는 괄호인 경우
      const top = stack.pop(); // 스택에서 괄호를 꺼냅니다.
      if (top !== map[char]) {
        return false; // 유효하지 않은 괄호 순서인 경우 false를 반환합니다.
      }
    } else {
      stack.push(char); // 여는 괄호인 경우 스택에 추가합니다.
    }
  }

  return stack.length === 0; // 모든 괄호가 짝을 이루면 스택은 비어있어야 합니다.
};

export const test = s => {
  const stack = [];
  const map = {
    '{': '}',
    '(': ')',
    '[': ']',
  };
  for (const char of s) {
    //여는경우
    if (char in map) {
      stack.push(map[char]);
    } else if (stack.pop() !== char) {
      return false;
    }
  }
  return stack.length === 0;
};

const input = '({}[][]())';
console.log(test(input));
console.log([...Array(5).keys()]); // [0, 1, 2, 3, 4]
