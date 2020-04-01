function sqrt(number) {
  return Math.sqrt(number);
}

function power(baseNumber, toThePowerOff) {
  // eslint-disable-next-line no-restricted-properties
  return Math.pow(baseNumber, toThePowerOff);
}

function round(numberToBeRounded) {
  return Math.round(numberToBeRounded);
}

export {
  sqrt,
  power,
  round
};