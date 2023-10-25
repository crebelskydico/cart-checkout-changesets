import { test, expect } from 'vitest';
import { add, subtract, multiply } from '../src';

test('add function', () => {
    const result = add(2, 3);
    expect(result).toBe(5);
});

test('subtract function', () => {
    const result = subtract(5, 3);
    expect(result).toBe(2);
});

test('multiply function', () => {
    const result = multiply(2, 3);
    expect(result).toBe(6);
});
