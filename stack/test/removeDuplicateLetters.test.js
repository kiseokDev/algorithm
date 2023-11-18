// FILEPATH: /home/prime/workspace/algorithm/stack/test/removeDuplicateLetters.test.js
import { removeDuplicateLetters } from '../removeDuplicateLetters';

describe('removeDuplicateLetters', () => {
  test('removes duplicate letters and returns the lexicographically smallest result', () => {
    expect(removeDuplicateLetters('bcabc')).toBe('abc');
    expect(removeDuplicateLetters('cbacdcbc')).toBe('acdb');
  });

  test('returns the same string when there are no duplicate letters', () => {
    expect(removeDuplicateLetters('abc')).toBe('abc');
  });

  test('returns an empty string when the input string is empty', () => {
    expect(removeDuplicateLetters('')).toBe('');
  });

  test('returns the correct result when the input string contains multiple identical letters', () => {
    expect(removeDuplicateLetters('aaaaa')).toBe('a');
    expect(removeDuplicateLetters('ababa')).toBe('ab');
  });
});
