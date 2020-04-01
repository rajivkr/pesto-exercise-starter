const aperture = (expectedTupleLength, inputArr) => {
  if (expectedTupleLength > inputArr.length) {
    return [];
  }
  const resultArr = [];
  for (const [index] of inputArr.entries()) {
    if (index + expectedTupleLength <= inputArr.length) {
      resultArr.push(inputArr.slice(index, index + expectedTupleLength));
    }
  }
  return resultArr;
};

export {
  aperture
};