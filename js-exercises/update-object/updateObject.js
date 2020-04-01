function updateObject(...args) {
  const indexToReplace = args[0];
  const elementToReplace = args[1];
  const inputArr = args[2];

  inputArr.splice(indexToReplace, 1, elementToReplace);
  return inputArr;
}

export {
  updateObject
};