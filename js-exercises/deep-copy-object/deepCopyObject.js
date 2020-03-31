const deepCopyObject = sourceObj => {
  let value, key;

  if (typeof sourceObj !== 'object' || sourceObj === null) {
    return sourceObj;
  }

  const targetObj = Array.isArray(sourceObj) ? [] : {};

  for (key in sourceObj) {
    value = sourceObj[key];
    targetObj[key] =
      typeof value === 'object' && value !== null ? deepCopyObject(value) : value;
  }

  return targetObj;
};
export {
  deepCopyObject
};