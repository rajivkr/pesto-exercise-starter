const flipArgs = (callback) => {
  return remainingArgs => callback(remainingArgs.reverse());
};

export default flipArgs;