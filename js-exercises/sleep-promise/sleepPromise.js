const sleep = timeout => new Promise(resolve => {
  setTimeout(() => resolve(timeout), timeout);
});

export {
  sleep
};