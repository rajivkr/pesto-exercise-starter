import { leastCommonMultiple } from './leastCommonMultiple';

describe('leastCommonMultiple', () => {
  it('should return lcm of given 2 numbers', () => {
    expect(leastCommonMultiple(3, 4)).toBe(12);
    expect(leastCommonMultiple(30, 18)).toBe(90);
    expect(leastCommonMultiple(12, 14)).toBe(84);
  });
});
