function solution(queue1, queue2) {
  const totalSum =
    queue1.reduce((acc, cur) => acc + cur, 0) +
    queue2.reduce((acc, cur) => acc + cur, 0);
  if (totalSum % 2 !== 0) return -1; // 총 합이 홀수면 두 큐의 합을 같게 만들 수 없습니다.

  const targetSum = totalSum / 2;
  let sum1 = queue1.reduce((acc, cur) => acc + cur, 0);
  let sum2 = totalSum - sum1;
  let count = 0;
  let index1 = 0;
  let index2 = 0;
  const len = queue1.length;

  while (sum1 !== targetSum) {
    if (count > len * 3) return -1; // 불가능한 경우, -1 반환

    if (sum1 > targetSum) {
      sum1 -= queue1[index1];
      queue2.push(queue1[index1]);
      index1++;
    } else {
      sum1 += queue2[index2];
      queue1.push(queue2[index2]);
      index2++;
    }
    count++;

    // 두 큐의 인덱스가 각 큐의 길이를 넘어가면, 더 이상 조정할 수 없으므로 종료
    if (index1 >= len || index2 >= len) return -1;
  }

  return count;
}

// 예시 입력
// const queue1 = [3, 2, 7, 2];
// const queue2 = [4, 6, 5, 1];
const queue1 = [1, 2, 1, 2];
const queue2 = [1, 10, 1, 2];
console.log(solution(queue1, queue2)); // 예상 출력: 2
