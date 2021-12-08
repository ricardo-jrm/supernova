import React from 'react';

const sum = (a: number, b: number) => a + b;

it('sums 5 and 2 returns 7', () => {
  const a: number = 5;
  expect(sum(5, 2)).toBe(7);
});
