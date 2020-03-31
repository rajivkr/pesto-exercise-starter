function updateObject(...args) {
  // Since splice replaces from arr.length-1,
  // we want to replace from the arr.length
  const indexToReplace = args[0] < 0 ? args[2].length + args[0] : args[0];
  const elementToReplace = args[1];
  const inputArr = args[2];
  inputArr.splice(indexToReplace, 1, elementToReplace);
  return inputArr;
}

export { updateObject };
