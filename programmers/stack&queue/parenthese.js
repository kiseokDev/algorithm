const isValidParentheses = s => {
  // 문자열 길이가 홀수인 경우 바로 false 반환
  if (s.length % 2 !== 0) return false;

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === '(') {
      stack.push(')');
    } else {
      if (stack.length === 0 || stack.pop() !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isValidParentheses('()()')); //true
