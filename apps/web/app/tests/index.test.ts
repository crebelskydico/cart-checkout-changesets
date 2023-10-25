/* eslint-disable import/no-extraneous-dependencies  -- test*/
import { test, expect } from 'vitest';
import { add } from 'math-helpers';

test('add function should return the sum of two numbers', () => {
    const result = add(2, 3);
    expect(result).toBe(5);
});
