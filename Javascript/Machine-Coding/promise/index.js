/**
 *
 * Promise is eventual completion of asynchronus operation, it can have 3 states like pending, fulfill, reject
 * Promise takes two argumuents resolve and reject, resolve will retrun resolved result, reject will return reason for rejection
 * Promise help redcing the callback hell
 *
 */
const promise1 = new Promise((resolve, reject) => resolve("P1 Success"));
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P2 Success");
  }, 500);
});

const promise3 = new Promise((resolve, reject) => reject("P3 Failed"));
promise1
  .then((response) => {
    console.log(response);
  })
  .catch((e) => console.log(e));

promise2
  .then((response) => {
    console.log(response);
  })
  .catch((e) => console.log(e));

promise3
  .then((response) => {
    console.log(response);
  })
  .catch((e) => console.log(e));

/**
 *
 * Promise Static Methods Promis.all(), Promise.allSettled(), Promise.race(), Promise.any()
 *
 *
 */

// Promis.all() takes iterable of promises as input and returns a single promise, with an array of fullfilment of values. As soon as rejected any one of promises immediately reject all promises, never continue, returns error of first rejection value (not an array)

const Promises = [promise1, promise2];

Promise.all(Promises)
  .then((res) => {
    console.log("Promise All", res);
  })
  .catch((err) => {
    console.log("Promise All Error", err);
  });

//Promise.allSettled() takes iteratale of promises as input  and returns all resolved or rejected result as an array with status and value, this will wait untill complete all promises to settled

Promise.allSettled([...Promises, promise3])
  .then((res) => {
    console.log("Promise AllSet", res);
  })
  .catch((err) => {
    console.log("Promise AllSet", err);
  });

//Promise.any() takes iteratable of promises and wait for atleast one promise to success or resolve and return only resolve value. If rejects the=row aggrigated error like all promises were rejected

//Promise.race() static method takes an iterable of promises as input and returns a single Promise. This returned promise settles with the eventual state of the first promise that settles (resolve/reject)

// Finaly example - shchedules a function to be executed once promise settled
function checkMail() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Mail has arrived");
    } else {
      reject(new Error("Failed to arrive"));
    }
  });
}

checkMail()
  .then((mail) => {
    console.log(mail);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log("Experiment completed");
  });
