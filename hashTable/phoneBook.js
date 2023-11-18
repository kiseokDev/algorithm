//전화번호부에 적힌 전화번호 중, 한 번호가 다른 번호의 접두어인 경우가 있는지 확인하려 합니다.
// 전화번호가 다음과 같을 경우, 구조대 전화번호는 영석이의 전화번호의 접두사입니다.
function solution(phone_book) {
  let answer = true;
  phone_book.sort();
  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      answer = false;
      break;
    }
  }
  return answer;
}

console.log(solution(['119', '97674223', '1195524421'])); //false
console.log(solution(['123', '456', '789'])); //true
