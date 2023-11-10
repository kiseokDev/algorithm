import { isPalinDrome, isPalindromeUsingStack } from '../palindrome';
// import { isPalinDrome, isPalindromeUsingStack } from './pratice';

describe('isPalinDrome', () => {
  test('returns true for a palindrome linked list', () => {
    const head = [1, 2, 3, 2, 1];
    expect(isPalindromeUsingStack(head)).toBe(true);
  });

  test('returns false for a non-palindrome linked list', () => {
    const head = [1, 2, 3, 4, 5];
    expect(isPalindromeUsingStack(head)).toBe(false);
  });

  test('returns true for an empty linked list', () => {
    const head = [];
    expect(isPalindromeUsingStack(head)).toBe(true);
  });

  test('returns true for a linked list with one element', () => {
    const head = [1];
    expect(isPalindromeUsingStack(head)).toBe(true);
  });
});
