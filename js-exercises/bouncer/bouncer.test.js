import { bouncer } from './bouncer';

describe('bouncer', () => {
  it('should throw error if input is not array', () => {
    expect(() => bouncer('100')).toThrow();
    expect(() => bouncer(123)).toThrow();
  });

  it('should remove all falsy values', () => {
    expect(bouncer(['k', 10, NaN, '10'])).toEqual(['k', 10, '10']);
    expect(bouncer([1, '', false, 9])).toEqual([1, 9]);
    expect(bouncer([null, 0, NaN, undefined, '0'])).toEqual(['0']);
  });
});
