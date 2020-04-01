const duplicateLetters = (inputStr = '') => {
  const eachCharCount = {};
  let maxDuplicateCount = 0;

  inputStr.split('').forEach(char => {
    if (eachCharCount[char] !== undefined) {
      eachCharCount[char] += 1;
      if (eachCharCount[char] > maxDuplicateCount) maxDuplicateCount = eachCharCount[char];
    } else {
      eachCharCount[char] = 1;
    }
  });

  return maxDuplicateCount === 0 ? false : maxDuplicateCount;
};

export {
  duplicateLetters,
};