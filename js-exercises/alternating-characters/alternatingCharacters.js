const alternatingCharacters = (arrOfInputStrings = []) => {
  return arrOfInputStrings.map(input => {
    let minimumDeletionCount = 0;
    const everyInputArr = input.split('');
    for (const [index, elem] of everyInputArr.entries()) {
      if (elem === input[index + 1]) {
        minimumDeletionCount++;
      }
    }
    return minimumDeletionCount;
  });
};


export {
  alternatingCharacters
};