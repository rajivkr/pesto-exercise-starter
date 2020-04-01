const shiftLetter = (character, incrementBy = 1) => {
  const currentCharCode = ((character.charCodeAt(0) === 90) || (character.charCodeAt(0) === 122)) ?
    (character.charCodeAt(0) - 26) : (character.charCodeAt(0));
  return String.fromCharCode(currentCharCode + incrementBy);
};

const alphabeticShift = (inputStr = '') => {
  if (typeof inputStr !== 'string') {
    throw new Error('expected input as string');
  }
  return inputStr.split('').map((char) => shiftLetter(char)).join('');
};

export {
  alphabeticShift
};