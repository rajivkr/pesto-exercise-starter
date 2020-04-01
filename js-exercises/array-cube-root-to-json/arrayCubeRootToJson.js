const converArrElemToNumber = (arr) => arr.map(elem => Number(elem));
const validNumberArray = (arr) => arr.filter(Boolean).length === arr.length;

const arrayCubeRootToJson = arr => {
  if (!Array.isArray(arr)) {
    throw Error('expected array as input');
  }
  const resultObj = {};

  const updatedArr = converArrElemToNumber(arr);
  if (!validNumberArray(updatedArr)) {
    throw Error('expected input array to contain only numbers');
  }

  updatedArr.forEach((element) => {
    resultObj[element] = Math.cbrt(element);
  });

  return resultObj;
};

export {
  arrayCubeRootToJson
};