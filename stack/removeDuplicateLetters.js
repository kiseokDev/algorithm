//중복된 문자를 제외하고 사전적 순서로 나열하라
//input: "bcabc"
//output: "abc"
//input: "cbacdcbc"
//output: "acdb"

//t
/**
 * Removes duplicate letters from a string, keeping only the first occurrence of each letter,
 * and returns the lexicographically smallest result.
 * @param {string} s - The input string.
 * @return {string} The result string.
 */
export const removeDuplicateLetters = s => {
  const stack = []; // 스택을 초기화합니다.
  const seen = new Set(); // 이미 본 문자를 추적하는 집합입니다.
  const last = new Map(); // 각 문자의 마지막 발생 위치를 기록합니다.

  // 각 문자에 대한 마지막 위치를 기록합니다.
  [...s].forEach((char, i) => last.set(char, i));

  for (const char of s) {
    if (seen.has(char)) continue; // 이미 본 문자면 건너뜁니다.

    // 스택의 마지막 문자가 현재 문자보다 크고
    // 해당 문자가 나중에 다시 등장할 경우 스택에서 제거합니다.
    while (
      stack.length > 0 &&
      char < stack[stack.length - 1] &&
      last.get(char) < last.get(stack[stack.length - 1])
    ) {
      const removedChar = stack.pop();
      seen.delete(removedChar); // 스택에서 제거된 문자를 seen 집합에서도 제거합니다.
    }
    // 현재 문자를 스택에 추가하고 본 문자로 표시합니다.
    stack.push(char);
    seen.add(char);
  }

  // 스택에 있는 문자들을 합쳐 결과 문자열을 형성합니다.
  return stack.join('');
};

export const test = s => {
  const stack = [];
  const seen = new Set();
  const last = new Map();

  s.split('').forEach((char, idx) => last.set(char, idx));

  for (const char of s) {
    if (seen.has(char)) continue;

    while (
      stack.length > 0 &&
      char < stack[stack.length - 1] &&
      last.get(char) < last.get(stack[stack.length - 1])
    ) {
      const removedChar = stack.pop();
      seen.delete(removedChar);
    }
    stack.push(char);
    seen.add(char);
  }
  return stack.join('');
};
// 예시 사용법
console.log(test('bcabc')); //'abc'
console.log(test('cbacdcbc')); //'acdb'
