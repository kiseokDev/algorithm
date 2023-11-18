//https://school.programmers.co.kr/learn/courses/30/lessons/42586
/*
프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다. 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.

또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고, 이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.

먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때 각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.
*/
function solution(progresses, speeds) {
  const daysQueue = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );

  const result = [];

  while (daysQueue.length > 0) {
    let count = 0;
    const deployDay = daysQueue[0];

    while (daysQueue.length > 0 && daysQueue[0] <= deployDay) {
      daysQueue.shift(); // 큐에서 요소 제거
      count++;
    }

    result.push(count);
  }

  return result;
}
const queueBasedDeploymentCount = (progresses, speeds) => {
  //progresses = [93, 30, 55]
  //speeds = [1, 30, 5]
  //answer = [2, 1]
  const queue = [...progresses];
  const answer = [];
  let count = 0;
  while (queue.length > 0) {
    //하루지났을때를 설정
    for (let i = 0; i < queue.length; i++) {
      queue[i] += speeds[i];
    }
    queue;

    //작업이 완료됬을때 가정
    while (queue[0] >= 100) {
      queue.shift();
      speeds.shift();
      //몇일걸렸는지
      count++;
    }
    //
    if (count > 0) {
      answer.push(count);
      count = 0;
    }
  }
  return answer;
};

console.log(queueBasedDeploymentCount([93, 30, 55], [1, 30, 5])); // [2, 1]
// [95, 90, 99, 99, 80, 99]	[1, 1, 1, 1, 1, 1]	[1, 3, 2]
// console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
