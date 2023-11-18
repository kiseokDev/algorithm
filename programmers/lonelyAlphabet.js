//알파벳 소문자로만 이루어진 어떤 문자열에서, 2회 이상 나타난 알파벳이 2개 이상의 부분으로 나뉘어 있으면 외톨이 알파벳이라고 정의합니다.문자열 "edeaaabbccd"를 예시로 들어보면,

// a는 2회 이상 나타나지만, 하나의 덩어리로 뭉쳐있으므로 외톨이 알파벳이 아닙니다.
// "ede(aaa)bbccd"
// b, c도 a와 같은 이유로 외톨이 알파벳이 아닙니다.
// d는 2회 나타나면서, 2개의 부분으로 나뉘어 있으므로 외톨이 알파벳입니다.
// "e(d)eaaabbcc(d)"
// e도 d와 같은 이유로 외톨이 알파벳입니다.
// 문자열 "eeddee"를 예시로 들어보면,

// e는 4회 나타나면서, 2개의 부분으로 나뉘어 있으므로 외톨이 알파벳입니다.
// "(ee)dd(ee)"
// d는 2회 나타나지만, 하나의 덩어리로 뭉쳐있으므로 외톨이 알파벳이 아닙니다.
// "ee(dd)ee"
// 문자열 input_string이 주어졌을 때, 외톨이 알파벳들을 알파벳순으로 이어 붙인 문자열을 return 하도록 solution 함수를 완성해주세요. 만약, 외톨이 알파벳이 없다면 문자열 "N"을 return 합니다.

//외톨이알파벳
//입력 :edeaaabbccd
//출력 : de

//입력 : eeddee
//출력 : e

//입력 : string
//출력 : N
function solution(input_string) {
  const charMap = {};

  // 문자열 순회하며 알파벳의 위치와 횟수를 기록
  for (let i = 0; i < input_string.length; i++) {
    const char = input_string[i];
    if (!charMap[char]) {
      charMap[char] = [];
    }
    charMap[char].push(i);
  }
  charMap;

  // 외톨이 알파벳 찾기
  const loners = Object.keys(charMap).filter(char => {
    const positions = charMap[char];
    return (
      positions.length > 1 &&
      positions.some((pos, idx) => {
        // 이전 위치와 현재 위치가 연속되지 않는 경우 체크
        return idx > 0 && pos !== positions[idx - 1] + 1;
      })
    );
  });

  // 외톨이 알파벳 정렬 후 반환
  return loners.length > 0 ? loners.sort().join('') : 'N';
}

// 테스트
console.log(solution('edeaaabbccd')); // "de"
console.log(solution('eeddee')); // "e"

console.log(solution('edeaaabbccd')); //"de"

// console.log(solution('eeddee')); //	"e"

console.log(solution('string')); //	"N"

// console.log(solution('zbzbz')); //"bz"
