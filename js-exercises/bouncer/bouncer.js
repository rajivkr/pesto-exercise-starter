const bouncer = (inputToCheck) => {
  if (!Array.isArray(inputToCheck)) {
    throw new Error('Expected input to be an array.');
  }

  return inputToCheck.filter(val => val);
};

export {
  bouncer
};