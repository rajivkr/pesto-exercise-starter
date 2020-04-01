const parseMs = milliSeconds => {
  if (typeof milliSeconds !== 'number') {
    throw new Error(
      `Expected number type as input, got ${typeof milliSeconds}`
    );
  }
  return {
    days: Math.floor(milliSeconds / 86400000),
    hours: Math.floor(milliSeconds / 3600000) % 24,
    minutes: Math.floor(milliSeconds / 60000) % 60,
    seconds: Math.floor(milliSeconds / 1000) % 60,
    milliseconds: Math.floor(milliSeconds) % 1000,
    microseconds: Math.floor(milliSeconds * 1000) % 1000,
    nanoseconds: Math.floor(milliSeconds * 1e6) % 1000
  };
};

export {
  parseMs
};