// 2에서 9까지 숫자가 주어졌을 때 전화 번호로 조합 가능한 모든 문자를 출력하라.

// 입력 "23"
// 출력 ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

// 1. DFS
function letterCombination(digits) {
  const result = [];
  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
  };
  function dfs(str, index) {
    //끝까지 탐색하면 백트래킹
    //str의 길이가 digits의 길이와 같으면(조합완료) result에 push
    //str의 길이가 digits의 길이보다 작으면, map[digits[index]]의 길이만큼 반복문을 돌면서 dfs를 재귀호출
    //str의 길이가 digits의 길이보다 크면 종료
    if (str.length === digits.length) {
      result.push(str);
      return;
    }

    const letters = map[digits[index]];
    letters;
    for (let i = 0; i < letters.length; i++) {
      str + letters[i];
      dfs(str + letters[i], index + 1);
    }
  }
  dfs('', 0);
  return result;
}

console.log(letterCombination('23'));
//["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
