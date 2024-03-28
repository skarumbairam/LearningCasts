//1. Anagram

const isAnagram = function (str1, str2) {
  console.log("check Anagram");
  const a = str1.toLowerCase().replace(/[^\w]/g, "");
  const b = str2.toLowerCase().replace(/[^\w]/g, "");

  if (a.length !== a.length) return false;

  const obj1 = helperString(a);
  const obj2 = helperString(b);

  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
};

const helperString = function (str) {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    const temp = str[i];
    if (obj[temp]) {
      obj[temp]++;
    } else {
      obj[temp] = 1;
    }
  }
  return obj;
};
const a = isAnagram("RAIL! SAFETY!", "fairy tales");
console.log(a);

// 2. Polindrom

const isPalindrom = function (str) {
  console.log("check Palindrom");
  const strArr = str.split("");
  const reverse = strArr.reduce((acc, curr, idx) => {
    acc = curr + acc;
    return acc;
  }, "");

  return str === reverse;
};

const b = isPalindrom("abba");
console.log(b);

// 3. Pangram

const isPangram = function (str) {
  console.log("check Pangram");
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let modifiedStr = str.toLowerCase();
  let pangram = true;
  for (i = 0; i < alphabet.length; i++) {
    if (!modifiedStr.includes(alphabet[i])) return (pangram = false);
    //console.log(modifiedStr.includes(alphabet[i]));
  }

  return pangram;
};

const c = isPangram("The quick brown fox jumps over he lazy dog");
console.log(c);

// 4.  Revese number

const reverseNumber = function (num) {
  console.log("Reverse Number", num);
  const sign = Math.sign(num);
  const strNum = num.toString();
  const revetsNum = parseInt(strNum.split("").reverse().join(""));

  return sign * revetsNum;
};

const reverseNum = reverseNumber(-23400);
console.log(reverseNum);

// 5.  Flatten Array

const result = [];
function flatArray(arr, depth = 1) {
  for (const ele of arr) {
    if (Array.isArray(ele) && depth > 0) {
      flatArray(ele, depth - 1);
    } else {
      result.push(ele);
    }
  }
  return result;
}
console.log("Flatt arr", [1, 2, [3, [4]]]);
const flat = flatArray([1, 2, [3, 4]], 2);
console.log(flat);

// 6.  Chunk Array chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]

const chunkArray = function (arr, size) {
  console.log(" Split to Chunk Arrays ", "[" + arr + "]" + " size is " + size);
  const result = [];
  const copyArray = arr.slice();

  for (let i = 0; i < arr.length; i++) {
    const tempSlice = arr.slice(i * size, size + i * size);
    //const tempSlice = copyArray.splice(0, size);
    if (tempSlice.length > 0) {
      result.push(tempSlice);
    }
  }
  return result;
};

const chunk = chunkArray([1, 2, 3, 4, 5, 6], 3);
console.log(chunk);

// 7. Febonacci series 0,1,1,2,3,5,8,11..etc

const febonacci = function (num) {
  console.log("Check Febonacci Series for num and its value for", num);
  const arr = [0, 1];
  for (i = 2; i <= num; i++) {
    const tempNumber = arr[i - 2] + arr[i - 1];
    arr.push(tempNumber);
  }
  console.log(arr);
  return arr[arr.length - 1];
};
const feb = febonacci(7);
console.log(feb);

// 8.  Febonacci series recurssive and returns only value

function febc(n) {
  // console.log("Check Febonacci value for a num using recurssive", n);
  if (n < 2) return n;
  return febc(n - 1) + febc(n - 2);
}

console.log("Check Febonacci value for a num using recurssive", 7);
const febc1 = febc(7);
console.log(febc1);

// 9. Compare each array Elements, a1 array items contains square of a1 elements in a2 true or false
// a1 = [1,2,3,4, 4], a2 = [16,9,4,1, 16] if compare these two return true

const compareArrayElements = function (a1, a2) {
  console.log("Compare two array elements, match the conditions");
  if (a1.length !== a2.length) return false;

  for (const ele of a1) {
    const tempSqrEle = ele * ele;
    if (a2.indexOf(tempSqrEle) < 0) {
      return false;
    }
    a2.splice(a2.indexOf(tempSqrEle), 1); // traverse to each element in a2
  }
  return true;
};

const comparission = compareArrayElements([1, 2, 3, 3], [9, 9, 4, 1]);
console.log(comparission);

// 10. Sum zero
// Write a function sumZero which accepts a sorted array of integers . The funtion should find the first pair where the sum 0.
// [-1, -2, -3, -4, 0, 3, 4, 5, 6]

const findePairSum = function (arr, target) {
  console.log("Find Pair sum and target");
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        console.log(arr[i], arr[j]);
        console.log(arr.indexOf(arr[i]), arr.indexOf(arr[j])); // to log the index
        return; // first value
      }
    }
  }
};

findePairSum([-1, -2, -3, -4, 0, 3, 4, 5, 6], 9);

// 11. Find Maxsubarray for larger sum
// input -> [-2, 1, -3, 4, -1, 2, 1, -5, 4]; -> 6 [4,-1,2,1]
const maxSubArray = function (arr) {
  console.log("Approach 1: Calcualte max sum from subArray");
  let maxSum = arr[0];
  let currSum = 0;

  for (let i = 0; i < arr.length; i++) {
    //sum = sum + arr[i];
    currSum = currSum + arr[i];
    if (currSum > maxSum) {
      maxSum = currSum;
    }
    if (currSum <= 0) {
      currSum = 0;
    }
  }
  return maxSum;
};

const maxval = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log(maxval);

// 11 a

const maxSubArr = function (array) {
  console.log("Approach 2 : Calcualte max sum from subArray");
  let maxSum = 0;

  // optional
  let startIndex = 0;
  let lastIndex = 0;

  for (let i = 0; i < array.length; i++) {
    let currentMax = 0;
    for (j = i; j < array.length; j++) {
      currentMax = currentMax + array[j];
      if (currentMax > maxSum) {
        maxSum = currentMax;
        startIndex = i;
        lastIndex = j;
      }
    }
  }

  console.log(array.slice(startIndex, lastIndex + 1));
  return maxSum;
};

const maxval1 = maxSubArr([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log(maxval1);

// 12 Two sum problem, Given array of numbers and an integet target,
// Return indeces of two numbers such that they add up to target
// input nums : [2,7,11,15], target = 9; we can use findePairSum however this is optimal sol

const twoSum = function (array, target) {
  console.log("Two Sum Problem", "[" + array + "] target :" + target);
  const obj = {};

  for (let i = 0; i < array.length; i++) {
    const neededNumber = target - array[i];
    if (obj[neededNumber] !== undefined) {
      console.log(i, obj[neededNumber]);
    }
    obj[array[i]] = i;
  }
};

twoSum([2, 7, 11, 15], 9);

//13 Implement a function in JavaScript to remove duplicate characters from a string without using any additional data structures.

const removeDuplicateChar = function (str) {
  let result = "";
  if (str.length < 0) return result;
  const strArr = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (!result.includes(str[i])) {
      result = result + str[i];
    }
  }
  return result;
};

const remove = removeDuplicateChar("");
console.log(remove);

// 14. Rotate Array

const rotateArrayNtimes = function (array, ntimes) {
  console.log("Array Rotation N times Approach 1");
  for (let i = 0; i < ntimes; i++) {
    array.unshift(array.pop());
  }
  console.log(array);
};
rotateArrayNtimes([1, 2, 3, 4, 5, 6], 3); // [4,5,6,1,2,3]

const rotateArrayNtimes1 = function (inputArr3, k) {
  console.log("Array Rotation N times Approach 2");
  const result = [];
  const n = inputArr3.length;
  for (let i = 0; i < n; i++) {
    if (i < k) {
      result[i] = inputArr3[n + i - k];
    } else {
      result[i] = inputArr3[i - k];
    }
  }
  console.log(result);
};

rotateArrayNtimes1([1, 2, 3, 4, 5, 6], 3);

// 15 object flat recurssive

function objectRecurssive() {
  const resultObj = {};

  const user = {
    name: "Senthilkumar",
    details: {
      family: {
        wife: "Hema",
        son: "Havish",
        daughter: "Dharani",
      },
      office: {
        company: "PayPal",
        city: "Bangalore",
      },
    },
  };

  function callObj(obj, parent) {
    for (const key in obj) {
      if (typeof obj[key] === "object") {
        callObj(obj[key], `${parent}_${key}`);
      } else {
        resultObj[`${parent}_${obj[key]}`] = obj[key];
      }
    }
  }

  callObj(user, "user"); //user_name: senthilkumarr, user_name_details_family_wife:Hema,
  console.log(resultObj);
}

// 16 Get second largest value from array

// approach 1

const getSecondLargestValue = function (arr) {
  console.log(" getSecondLargestValue ", arr);
  const uniqueArray = Array.from(new Set(arr));
  uniqueArray.sort((a, b) => a - b);
  const result = [];

  if (uniqueArray.length > 2) {
    return uniqueArray[uniqueArray.length - 2];
  } else {
    return uniqueArray[0];
  }
};

const getSecondLargestOptimised = function (arr) {
  console.log(" getSecondLargestOptimised ", arr);
  let largestVal = Number.NEGATIVE_INFINITY; // Can't set 0 since 0> -1
  let secondLargestVal = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestVal) {
      secondLargestVal = largestVal;
      largestVal = arr[i];
    }

    if (arr[i] > secondLargestVal && arr[i] < largestVal) {
      secondLargestVal = arr[i];
    }
  }

  return secondLargestVal;
};

console.log(getSecondLargestOptimised([1, 2, 4, 5, 6, 9]));

// 17 Form words from given arry string elements

const formWord = function (arr) {
  const letterCountObj = {};
  const letterToFollow = {};

  arr.forEach((el) => {
    const [from, to] = el.split("-");
    letterToFollow[from] = to;

    if (letterCountObj[from] !== undefined) {
      letterCountObj[from]++;
    } else {
      letterCountObj[from] = 1;
    }

    if (letterCountObj[to] !== undefined) {
      letterCountObj[to]++;
    } else {
      letterCountObj[to] = 1;
    }
  });

  const findStartLetter = function () {
    let temparr = [];
    let startingLetter = "";
    for (let key in letterCountObj) {
      if (letterCountObj[key] < 2) {
        temparr.push(key);
      }
    }

    arr.forEach((ele, idx) => {
      if (ele.startsWith(temparr[0])) {
        startingLetter = temparr[0];
      }
      if (ele.startsWith(temparr[1])) {
        startingLetter = temparr[1];
      }
    });
    console.log("Starging Letter", startingLetter);
    return startingLetter;
  };

  let wordStartsWith = findStartLetter();
  const wordLength = Object.keys(letterCountObj).length;

  let count = 0;
  let nextLetter = wordStartsWith;
  let word = wordStartsWith;
  while (count <= wordLength) {
    if (letterToFollow[nextLetter]) {
      word = word + letterToFollow[nextLetter];
      nextLetter = letterToFollow[nextLetter];
    }
    count++;
  }
  console.log(word);
  return word;
};

//Switzerland
const getWord = formWord([
  "S-W",
  "W-I",
  "I-T",
  "T-Z",
  "Z-E",
  "E-R",
  "R-L",
  "L-A",
  "A-N",
  "N-D",
]);
console.log("getWord");

// 18. Remove duplicate elements in sorted array in place of array and count unique elements length
// input [1,1,2] -> 2, [1,2,_]
// input [0,0,1,1,1,2,2,3,4] -> 5, [0,1,2,3,4,_,_,_,_]

const removeDuplicateEle = function (arr) {
  console.log("Get Unique elements length");
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    } else {
      //arr[j] = "_";
    }
  }
  console.log(i + 1, arr);
};

removeDuplicateEle([0, 0, 1, 1, 1, 2, 2, 3, 4]);

// other approach

const removeDuplicateEle1 = function (arr) {
  console.log("Get Unique elements length approach1");
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i + 1, 1);
      i--;
    }
  }
  console.log(arr);
};

removeDuplicateEle1([0, 1, 2, 3, 4]);

//===========================================// Polifill and=================================================================================

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
//console.log("******************Start Callback************************");
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

//console.log("Start Promises");

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
// Promise.race -> returns first promise whihc is resolved or rejected value or reason respectively

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

// console.log(fnWithdebounce());
// console.log(fnWithdebounce());
// console.log(fnWithdebounce());
// console.log(fnWithdebounce());

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
