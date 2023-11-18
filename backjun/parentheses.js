// let fs = require('fs');
import fs from 'fs';
// const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');
const testCase = Number(input[0]);

// Read the standard input
input.slice(1).forEach(ele => console.log(inValidParentheses(ele)));

function inValidParentheses(s) {
  const stack = [];
  const map = {
    '(': ')',
  };

  for (let char of s) {
    if (map[char]) {
      // If it's an opening bracket, push the corresponding closing bracket to the stack
      stack.push(map[char]);
    } else if (char !== stack.pop()) {
      // If it's a closing bracket, compare it with the last opening bracket from the stack
      return 'NO';
    }
  }
  return stack.length === 0 ? 'YES' : 'NO';
}
