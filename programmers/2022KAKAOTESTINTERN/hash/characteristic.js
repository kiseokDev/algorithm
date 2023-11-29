function solution(survey, choices) {
  let answer = '';
  const scores = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  const choiceToScore = {
    1: 3, // 매우 비동의
    2: 2, // 비동의
    3: 1, // 약간 비동의
    4: 0, // 모르겠음
    5: 1, // 약간 동의
    6: 2, // 동의
    7: 3, // 매우 동의
  };

  survey.forEach((types, index) => {
    const score = choiceToScore[choices[index]];
    const [disagree, agree] = types;

    if (choices[index] < 4) {
      scores[disagree] += score;
    } else if (choices[index] > 4) {
      scores[agree] += score;
    }
  });

  answer += scores['R'] >= scores['T'] ? 'R' : 'T';
  answer += scores['C'] >= scores['F'] ? 'C' : 'F';
  answer += scores['J'] >= scores['M'] ? 'J' : 'M';
  answer += scores['A'] >= scores['N'] ? 'A' : 'N';

  return answer;
}

// 사용 예시
const survey = ['AN', 'CF', 'MJ', 'RT', 'NA'];
const choices = [5, 3, 2, 7, 5];
console.log(solution(['AN', 'CF', 'MJ', 'RT', 'NA'], [5, 3, 2, 7, 5])); // 'TCMA'
