 function sequentialPromise(promises) {
   // eslint-disable-next-line no-async-promise-executor
   return new Promise(async (resolve) => {
     let promiseResult;
     for (const promise of promises) {
       // eslint-disable-next-line no-await-in-loop
       promiseResult = await promise(promiseResult);
     }
     resolve(promiseResult);
   });
 }

 export {
   sequentialPromise
 };