import { describe, expect, test } from 'vitest'
import { mult, sum } from './calc.js'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
});
test('adds one parameter to equal itself', () => {
  expect(sum(10)).toBe(10)
});


describe('mult function', () => {
  test('mult of 2 numbers', () => {
    expect(mult(5, 10)).toBe(50);
    expect(mult(5, -10)).toBe(-50);
  });
  test('mult minus is negative', () => {
    expect(mult(-5, 10)).toBeLessThan(0);
    expect(mult(5, -10)).toBeLessThan(0);
  });
  test('one parameter', () => {
    expect(mult(-5)).toBe(-5);
  });
});