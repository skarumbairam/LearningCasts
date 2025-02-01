const newObj = {
  name: "Senthil",
  result: function (a1, a2, a3) {
    console.log("My name is " + a1 + " I am a" + a2 + " working at " + a3);
    //return this.age * 2 + a1
  },
};

const myObj = {
  name: "Siva",
};

// result.apply(newObn, [a1,a2,a3])

Function.prototype.myCallMethod = function (context = {}, ...args) {
  if (typeof this !== "function") throw new Error(" This is not a function");
  context.fn = this;
  console.log(this);
  context.fn(...args);
};

Function.prototype.myApplyMethod = function (context = {}, arg = []) {
  if (typeof this !== "function") throw new Error(" This is not a function");
  if (!Array.isArray(arg))
    throw new Error("List of args are not a iteratble objec");
  context.fn = this;
  context.fn(...arg);
};

Function.prototype.myBindMethod = function (context = {}, ...arg) {
  if (typeof this !== "function") throw new Error(" This is not a function");
  context.fn = this;
  return function (...newArgs) {
    return context.fn(...arg, ...newArgs);
  };
};

// Polifill for array map, filter, reduce

console.log("******************Array Polifil ************************");
//array.map( (curr, idx, arr) => {})
// array.reduce ( (acc, curr, i, arr) => {}, 0)
const keyArray = [1, 2, 3, 4, 6, 7];

Array.prototype.myMap = function (cb) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i, this));
  }
  return result;
};

Array.prototype.myFilter = function (cb) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

Array.prototype.myReduce = function (cb, intialValue) {
  let acc = intialValue;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i], i, this) : this[i];
  }
  return acc;
};

const multiply = keyArray.myReduce((acc, curr) => {
  return curr + acc;
}, 5);
console.log(multiply);
// Callback to Promise and async & await
console.log("******************Start Callback************************");
/*
console.log("Start");

function showImportantMessage(message, cb) {
  setTimeout(() => {
    cb(`subscribe to ${message}`);
  }, 100);
}

function liketheVideo(like, cb) {
  setTimeout(() => {
    cb(`Like ${like}`);
  }, 100);
}

function sharetheVideo(share, cb) {
  setTimeout(() => {
    cb(`share ${share}`);
  }, 100);
}

function commandVideo(command, cb) {
  setTimeout(() => {
    cb(`Give feedback to ${command}`);
  }, 100);
}

// callback hell
const message = showImportantMessage("Code.io", function (message) {
  console.log(message);
  liketheVideo("Javascript interview video", (action) => {
    console.log(action);
    sharetheVideo("Javascript interview video", (action) => {
      console.log(action);
      commandVideo("Javascript interview video", (action) => {
        console.log(action);
      });
    });
  });
});
// this is callback hell prymid like structure

console.log("Stop");
*/

console.log("Start Promises");

function showImportantMessage(message) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`subscribe to ${message}`);
    }, 100);
  });
}

function liketheVideo(like) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Like to ${like}`);
    }, 100);
  });
}

function sharetheVideo(share) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Share the ${share}`);
    }, 100);
  });
}

function commandVideo(command) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`command the ${command}`);
    }, 100);
  });
}

/*
// approach 1
showImportantMessage("Code.io")
  .then((res) => {
    console.log(res);
    liketheVideo("Javascript interview video").then((res) => {
      console.log(res);
      sharetheVideo("Javascript interview video").then((res) => {
        console.log(res);
        commandVideo("Javascript interview video").then((res) =>
          console.log(res)
        );
      });
    });
  })
  .catch((err) => {});
*/

// approach 2

/*
showImportantMessage("Code.io")
  .then((res) => {
    console.log(res);
    return liketheVideo("Javascript interview video");
  })
  .then((res) => {
    console.log(res);
    return sharetheVideo("Javascript interview video");
  })
  .then((res) => {
    console.log(res);
    return commandVideo("Javascript interview video");
  })
  .then((res) => console.log(res))
  .catch((e) => {
    console.log(e);
  });
*/
// Approach Promise combinators promise.all(), promise.race(), promise.any(), promise.allSettled()

//Promise.all -> return as a promise the result or response is all resolved promise's value as an Array, if any one of prmomises failed return the value of rejection reason only never goes to then block
//Promise.allSettled -> return as a promise, the response is resolved promised status (fulfill, reject) as a object like status and value for all promises in single an Array,
// Promise.any -> wait for all promises to resolve and look for atlease one success if yes returns the success promisev value else returns all failed reasons as an array
// Promise.race -> returns first promise which is resolved or rejected value or reason respectively

/*
Promise.all([
  showImportantMessage("code.io"),
  liketheVideo("JS Interview"),
  sharetheVideo("JS Interview"),
  commandVideo("JS Interview"),
])
  .then((res) => {
    console.log(res);
  })
  .catch((e) => console.log(e));
*/
//Promises Polyfill

const p1 = new Promise((resolve, reject) => resolve(1));
const p2 = new Promise((resolve, reject) => resolve(2));
const p3 = new Promise((resolve, reject) => resolve(3));

Promise.myAll = function (promises) {
  console.log("Promise All");
  const newPromise = new Promise((resolve, reject) => {
    const results = [];
    if (!promises.length) {
      resolve(results);
      return;
    }
    let pendingPromise = promises.length;
    for (const currPromise of promises) {
      Promise.resolve(currPromise)
        .then((res) => {
          results.push(res);
          pendingPromise--;
          if (pendingPromise === 0) {
            resolve(results);
          }
        })
        .catch((e) => reject(e));
    }
  });

  return newPromise;
};

Promise.myAll([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((e) => console.log(e));

//  Debounce concept

const debounce = function (cb, del) {
  let timer;
  console.log("I am  debounce fn");
  return function (...args) {
    clearInterval(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, del);
  };
};
const fnWithdebounce = debounce(() => {
  console.log("I am under debounce");
}, 1000);

console.log(fnWithdebounce());
console.log(fnWithdebounce());
console.log(fnWithdebounce());
console.log(fnWithdebounce());

// Throttle

const throttle = function (cb, del) {
  console.log("Throttle Function");
  let flag = true;
  return function (...args) {
    if (flag) {
      flag = false;
      setTimeout(() => {
        cb(...args);
        flag = true;
      }, del);
    }
  };
};

const callThrottle = throttle(function () {
  console.log("I am calling under throttel");
}, 1);
