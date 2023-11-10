//투포인터!
export function trap(height) {
  let left = 0;
  let right = height.length - 1;
  let ans = 0;
  let left_max = 0;
  let right_max = 0;

  while (left < right) {
    left_max = Math.max(left_max, height[left]);
    right_max = Math.max(right_max, height[right]);

    if (left_max <= right_max) {
      console.log(height[left]);
      ans += left_max - height[left];
      left++;
    } else {
      ans += right_max - height[right];
      right--;
    }
  }
  return ans;
}
// function trapWithStack(height) {
//   let ans = 0;
//   const stack = [];
//   const n = height.length;

//   for (let i = 0; i < n; i++) {
//     // 현재 높이가 이전 높이보다 높을 때

//     while (stack.length && height[i] > height[stack[stack.length - 1]]) {
//       const top = stack.pop();
//       if (!stack.length) break;
//       // 이전과의 차이만큼 물 높이 처리
//       const distance = i - stack[stack.length - 1] - 1;
//       const waters =
//         Math.min(height[i], height[stack[stack.length - 1]]) - height[top];

//       ans += distance * waters;
//     }
//     stack.push(i);
//   }
//   return ans;
// }
// console.log(trapWithStack(height));
