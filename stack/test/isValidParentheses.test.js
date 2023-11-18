// FILEPATH: /home/prime/workspace/algorithm/string/test/isValidParentheses.test.js
import { isValidParentheses } from '../isValidParentheses';

describe('isValidParentheses', () => {
  test('returns true for valid parentheses', () => {
    expect(isValidParentheses('()')).toBe(true);
    expect(isValidParentheses('()[]{}')).toBe(true);
    expect(isValidParentheses('{[]}')).toBe(true);
  });

  test('returns false for invalid parentheses', () => {
    expect(isValidParentheses('(]')).toBe(false);
    expect(isValidParentheses('([)]')).toBe(false);
    expect(isValidParentheses(']')).toBe(false);
  });

  test('returns true for an empty string', () => {
    expect(isValidParentheses('')).toBe(true);
  });
});
