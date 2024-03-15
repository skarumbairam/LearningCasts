// --- Directions
// Given an array with nested arraelement , it has to flattent as single array
// where each subarray is of length size
// --- Examples
// flatArray([1, 2, [3, 4]]) --> [1,2,3,4]
// flatArray([1, [2, 3], [[4, 5], 6],[[7,8],[9,10]]] ) --> [1,2,3,4,5,6,7,8,9,10]

const arr = [1, [2, 3], [[4, 5], 6], [[7, 8], [9, 10], [[11, 12]]], 13];

function flatArray(arr, depth = 1) {
  let result = [];
  for (let element of arr) {
    if (Array.isArray(element) && depth !== 0) {
      flatArray(element, depth - 1);
    } else {
      result.push(element);
    }
  }
  return result;
}
flatArray(arr, 1);
console.log(result);
