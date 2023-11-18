const removeDuplicateNumbers = nums => {
  const stack = [];
  for (const number of nums) {
    if (stack[stack.length - 1] !== number) {
      stack.push(number);
    }
  }
  return stack;
};
// console.log(removeDuplicateNumbers([1, 1, 3, 3, 0, 1])); // [1,3,0,1]
console.log(removeDuplicateNumbers([4, 4, 4, 3, 3])); // [1,3,0,1]
/**
[1,1,3,3,0,1,1]	 	[1,3,0,1]
[4,4,4,3,3]			[4,3]
 */
