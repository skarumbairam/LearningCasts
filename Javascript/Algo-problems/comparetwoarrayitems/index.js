/**
 *
 * @param {*} a1 array
 * @param {*} a2 array items contains square of a1 elements
 * @returns true or false
 * Example :
 * a1 = [1,2,3,4], a2 = [16,9,4,1] if compare these two return true
 */

function same(a1, a2) {
  let result = true;
  if (a1.length !== a2.length) return;
  for (const el of a1) {
    const tempEl = el * el;
    if (a2.indexOf(tempEl) < 0) {
      result = false;
      console.log(result);
      return false;
    }
    console.log("a2 idx", a2.indexOf(tempEl));
    a2.splice(a2.indexOf(tempEl), 1);
  }
  return true;
}

function approach2(a1, a2) {
  let result = true;
  if (a1.length !== a2.length) {
    let result = false;
    return;
  }

  const frequencyCounter1 = objectMapHelper(a1);
  const frequencyCounter2 = objectMapHelper(a2);

  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  for (const key in frequencyCounter1) {
    const keykey = key * key;
    console.log(keykey in frequencyCounter2);
    console.log(
      "check no of times:",
      frequencyCounter1[key],
      frequencyCounter2[keykey]
    );

    if (!keykey in frequencyCounter2) {
      result = false;
      console.log("result No Key_______");
    }

    if (frequencyCounter1[key] !== frequencyCounter2[keykey]) {
      result = false;
      console.log("result Not Match no times_______");
    }
  }

  console.log("result", result);
}

function objectMapHelper(arr) {
  var myObj = {};
  for (let item of arr) {
    console.log(item);
    if (myObj[item] === undefined) {
      myObj[item] = 1;
    } else {
      myObj[item]++;
    }
  }
  return myObj;
}

var a1 = [1, 2, 2, 4];
var a2 = [16, 4, 4, 1];

//same(a1, a2);
approach2(a1, a2);
