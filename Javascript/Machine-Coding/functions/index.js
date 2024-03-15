/**
 * What is function expression?
 *  A function is assigned to a variable then it is called function expression
 *  A function declered without name is called ananyms funtions
 *  Normal function creation with name or without name is called function decleration
 *
 * What is first class function?  - Functions is treated as like other variables, function can be passed as arguments to another function and return as function
 * What is IIFE? - Immediately invoke functions (function square() {console.log("dasda")})()
 *
 * what us callback funtions? - As mentoned functions are first class object in JS, a function is paased to another function as an argument and invoked when needed inside the function is called callback function.
 * It can be sychornus or Asynchornous
 * */

// Function expression
const fnExpression = function (num) {
  return num * num;
};

// Function decleration
function a() {
  // To do something
}

// Ananyms function
// function () {

// }

// What is first class function?
