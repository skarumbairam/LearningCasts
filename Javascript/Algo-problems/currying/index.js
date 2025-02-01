// Infinite currying

// add(1)(2)(3).....(n)

function add(a) {
  return function (b) {
    if (b) {
      return add(a + b);
    }
    return a;
  };
}

const addNumber = add(3)(5)(4)(9)();
console.log(addNumber);

// Evaluate Infinite currying
/***
 * evaluate('sum')(4)(3) => 7
 * evaluate('multiply')(4)(3) => 12
 * evaluate('divide')(4)(2) => 2
 * evaluate('subtract')(4)(2) => 2
 */

function evaluate(operation) {
  return function (a) {
    return function (b) {
      if (operation == "sum") return a + b;
      if (operation == "multiply") return a * b;
      if (operation == "subtract") return a - b;
      if (operation == "divide") return a / b;
      return "invalid operation";
    };
  };
}

console.log(evaluate("subtract")(4)(3));
