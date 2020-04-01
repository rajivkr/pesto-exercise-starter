const longestWordInString = (wordInput) => {
  return typeof wordInput !== 'string' ? '' :
    wordInput.split(' ').sort((a, b) => b.length - a.length)[0].length;
};

export {
  longestWordInString
};