/**
 * Array.map( cb() => {})
 * nums.map((currElement, index, Array) => {});
 */

const nums = [1, 2, 3, 4];

// nums.map((curr, idx, arr) => {});
Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  console.log("temp", temp);
  return temp;
};

// nums.map((curr, idx, arr) => {});
Array.prototype.myFilter = function (cb) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }

  return temp;
};
// nums.reduce( (acc, curr, idx,  arr) => {}, initialValue);
Array.prototype.myReduce = function (cb, initialValue) {
  let acc = initialValue;

  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i], i, this) : this[i];
  }

  return acc;
};

const gtMap = nums.myMap((el, idx) => el * 2);
const gtTwo = nums.myFilter((el, idx) => el > 2);
const getSum = nums.myReduce((acc, curr, idx, nums) => acc + curr, 0);

// Promise.all() Polyfill
/**
 * Promise.all takes array of promises and return single promises with an array result of promises
 */
//

const p1 = Promise.resolve("Raja");
const p2 = Promise.resolve("Suresh");
const p3 = Promise.resolve("Mathan");
const promises = [p1, p2, p3];

function myPromiseAll(promiseArray) {
  let result = [];
  return new Promise((resolve, reject) => {
    promiseArray.forEach((p, idx) => {
      p.then((res) => {
        result.push(res);
        console.log(idx);
        if (idx === promiseArray.length - 1) {
          resolve(result);
        }
      }).catch((e) => reject(e));
    });
  });
}

myPromiseAll(promises)
  .then((res) => console.log(res))
  .catch((e) => console.log(e));
