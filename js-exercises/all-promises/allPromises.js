const allPromises = promises => new Promise((resolve, reject) => {
  const promiseResults = [];
  if (promises && promises.length > 1) {
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(result => {
        promiseResults[index] = result;
        if (index === promises.length - 1) {
          resolve(promiseResults);
        }
      }).catch(err => reject(err));
    });
  } else {
    resolve('');
  }
});

export {
  allPromises
};