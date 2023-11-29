function solution(alp, cop, problems) {
  // DP 테이블 초기화: 각 알고력과 코딩력 조합에 대해 최소 시간 저장
  let maxAlp = Math.max(...problems.map(p => p[0]), alp);
  let maxCop = Math.max(...problems.map(p => p[1]), cop);
  maxAlp;
  maxCop;

  let dp = Array.from({ length: maxAlp + 1 }, () =>
    new Array(maxCop + 1).fill(Infinity)
  );

  // 기본 상태 설정: 초기 알고력과 코딩력에 대한 시간을 0으로 설정
  dp[alp][cop] = 0;

  // 상태 업데이트: 각 알고력과 코딩력 조합에 대해 최적의 시간 계산
  for (let i = alp; i <= maxAlp; i++) {
    for (let j = cop; j <= maxCop; j++) {
      // 알고력과 코딩력을 1씩 증가시킬 때의 시간 업데이트
      if (i < maxAlp) {
        dp[i + 1][j] = Math.min(dp[i + 1][j], dp[i][j] + 1);
      }
      if (j < maxCop) {
        dp[i][j + 1] = Math.min(dp[i][j + 1], dp[i][j] + 1);
      }

      // 각 문제를 풀었을 때의 상태 업데이트
      problems.forEach(([alp_req, cop_req, alp_rwd, cop_rwd, time]) => {
        if (i >= alp_req && j >= cop_req) {
          let nextAlp = Math.min(maxAlp, i + alp_rwd);
          let nextCop = Math.min(maxCop, j + cop_rwd);
          dp[nextAlp][nextCop] = Math.min(
            dp[nextAlp][nextCop],
            dp[i][j] + time
          );
        }
      });
    }
  }

  // 최종 결과 도출: 모든 문제의 알고력 및 코딩력 요구사항을 충족하는 최소 시간을 찾기
  return dp[maxAlp][maxCop];
}

console.log(
  solution(10, 10, [
    [10, 15, 2, 1, 2],
    [20, 20, 3, 3, 4],
  ])
); // 15

// problems 앞에 요소를 가져온다 problems.pop()
// 구조분해 할당해서 현재 알고력과 코딩력을 비교한다(정렬되있다고 가정)
//
//       내능력이 같거나 높으면
//      부족한 만큼 result를 증가시킨다 while

// 최소힙을 정렬하기 위한 로직필요

//
// 마지막으로 푼 문제: 0번째 요소
// 부족한 만큼 result를 증가시킨다 while
// sort
// while(problems.length)
// problems 앞에 요소를 가져온다 problems.shift()
//	풀수 있는지 확인한다
// 		없으면 : 마지막으로 푼 문제를 다시푼다. result를 증가시킨다 problem에 push하고 sort한다
// 		있으면 : 알고력과 코딩력을 업데이트한다. result를 증가시킨다
//
// 최소힙을 정렬하기 위한 로직필요
