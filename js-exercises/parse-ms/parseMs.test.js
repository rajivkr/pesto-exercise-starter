import {
  parseMs
} from './parseMs';

describe('parseMs', () => {
  it('should throw error if input is not number', () => {
    expect(() => parseMs('100')).toThrow();
    expect(() => parseMs(['100'])).toThrow();
  });

  it('should return parsed milliseconds', () => {
    const HUNDRED_MILLIS = 100;
    expect(parseMs(HUNDRED_MILLIS)).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 100,
      microseconds: 0,
      nanoseconds: 0
    });

    const ONE_DAY_MILLIS = 1000 * 60 * 60 * 24;
    expect(parseMs(ONE_DAY_MILLIS)).toEqual({
      days: 1,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
      microseconds: 0,
      nanoseconds: 0
    });

    expect(parseMs(1337000001)).toEqual({
      days: 15,
      hours: 11,
      minutes: 23,
      seconds: 20,
      milliseconds: 1,
      microseconds: 0,
      nanoseconds: 0
    });
  });
});