const pathSatisfies = (predicate, path, inputObj) => {
  if (typeof predicate !== 'function') {
    throw new Error('expected predicate to be function');
  }
  if (!Array.isArray(path)) {
    throw new Error('expected path to be an array');
  }
  if (typeof inputObj !== 'object' && typeof inputObj !== 'function') {
    throw new Error('expected object as third parameter');
  }

  let searchResult = inputObj[path[0]];

  if (!searchResult) {
    return false;
  }

  for (let i = 1; i < path.length; i++) {
    searchResult = searchResult[path[i]];
  }
  return predicate(searchResult);
};


export {
  pathSatisfies
};