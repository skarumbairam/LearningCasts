# Javascript

## What is a call stack?

The call stack is a mechanism in JavaScript where functions and code blocks are executed sequentially, one line at a time. It can be thought of as the interpreter's process in a web browser. The call stack is a component of the JavaScript engine—such as the V8 engine in Chrome or SpiderMonkey in Firefox. It operates using a Last In, First Out (LIFO) data structure, meaning that the most recently added function or code block is the first to be executed.

## What is Hoisting?

Hoisting is a behavior in JavaScript that allows variables and functions to be accessed before they are initialized. This feature is unique to JavaScript and is not typically found in other programming languages.

Before JavaScript code is executed, two phases take place: the Memory Phase and the Code Execution Phase. During the Memory Phase, all variables and functions are moved to the top of the program. Variables are assigned a placeholder value of "undefined," while functions are stored as key-value pairs, with the function name as the key and its declaration as the value.

After this, the Code Execution Phase begins, and the code is executed line by line inside the call stack.

## What are Scopes in Javascript?

In JavaScript, scope refers to the **context** in which variables, functions, and objects are accessible or visible. It determines where these elements can be referenced or used within the code. Essentially, scope defines the boundaries of where a variable or function can be accessed and modified.

There are a few types of scope in JavaScript:

**Global Scope:**

Variables declared outside of any function are in the global scope. They can be accessed from anywhere in the code, including inside functions.
In a browser, global variables are typically added to the window object.

**Function Scope:**

Variables declared inside a function are only accessible within that function. They are not visible outside of it. This is also called local scope.
Every time a function is invoked, a new scope is created.

**Block Scope:**

Variables declared with let or const are scoped to the block (usually inside curly braces {}) where they are defined, rather than to the entire function.
For example, a variable declared within an if or for block will not be accessible outside of that block.

**Lexical Scope:**

JavaScript uses lexical scoping, meaning the scope of a variable is determined by where it is declared in the source code, not where it is called from. Inner functions have access to variables in their outer (enclosing) scopes.
```
let x = 10; // Global scope

function myFunction() {
  let y = 20; // Function scope
  if (true) {
    let z = 30; // Block scope
    console.log(x, y, z); // Accessible
  }
  console.log(x, y); // Accessible
  console.log(z); // Error: z is not defined
}

myFunction();
console.log(x); // Accessible
console.log(y); // Error: y is not defined

```

## What is Closure in Javascript?

A closure is a function that is bundled with its surrounding (or lexical) environment. 
In other words, a closure allows an inner function to access variables from its outer function, even after the outer function has finished executing. 
This means the inner function "remembers" its lexical environment, enabling it to use those variables later, even if it's executed in a different context or scope.

``` 
function outerFunction(outerVariable) {
  // outerVariable is part of the outer function's lexical environment
  return function innerFunction(innerVariable) {
    // innerFunction has access to outerVariable because of closure
    console.log("Outer Variable: " + outerVariable);
    console.log("Inner Variable: " + innerVariable);
  };
}

const closureExample = outerFunction("I'm from outer function!");

// The inner function is now executed separately, but still remembers the outer function's variable
closureExample("I'm from inner function!");

// Output
Outer Variable: I'm from outer function!
Inner Variable: I'm from inner function!

```

## What are the function types?

**Anonymous Function**

A function without names or unnamed functions is called an anonymous function
```
function () {
console.log("This is anonymous function");
}
```
**Named Function**
A function declared with a name is called a named function

```
function abc () {
  // TO DO Something in abc function (Function Declaration)
}


var abc = function () {
 // TO DO Something in abc function (Function Expression)
}

var abc = () => {
// TO DO Something in abc arrow function
}
```
**Function Declaration**
A function declaration is the traditional way of defining a function. It uses the function keyword followed by the function name, parameters, and the function body.
Function declarations are hoisted, meaning they are moved to the top of their scope before code execution starts. So you can call the function before it's declared in the code.

**Function Expression**
A function expression is when you assign a function to a variable. It can be anonymous or named, and the function is not hoisted.
Function expressions are not hoisted. The function definition is only available after the assignment, meaning you cannot call the function before it is defined.

**Arrow Functions**
An arrow function is a concise syntax for writing function expressions. It behaves similarly to function expressions in terms of hoisting and definition.





