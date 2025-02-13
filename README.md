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

**HOCs Functions**

In JavaScript, Higher-Order Functions (HOCs) are functions that either:

Accept one or more functions as arguments, or Return a function as their result.
The idea behind HOCs is that they allow you to create more flexible and reusable functions by taking advantage of the ability to pass and return functions.

Accepting functions as arguments: HOCs can take one or more functions as input.
Returning a function: HOCs can return a new function, possibly with enhanced functionality.

Array methods like map, filter, and reduce are built-in higher-order functions because they take a callback function as an argument.

**Advantage:**

**Reusability**: HOCs make code more reusable by abstracting common behavior.

**Abstraction**: You can define generic functions that can be customized by passing in different callback functions.

**Modularity**: They help in breaking down complex logic into simpler, smaller units, making the code easier to maintain.


```
function withLogging(func) {
  return function(...args) {
    console.log('Function called with arguments:', args);
    const result = func(...args);
    console.log('Function result:', result);
    return result;
  };
}

function add(a, b) {
  return a + b;
}

const addWithLogging = withLogging(add);
addWithLogging(2, 3);

// Output: Function called with arguments: [2, 3]
// Output: Function result: 5

```

## What is the callback?

As we know, functions are first-class citizens in JavaScript, which means that functions can be assigned to variables, passed as arguments (parameters) to other functions, and returned from other functions. This feature is unique to JavaScript (and a few other languages), which is why functions are considered first-class citizens.

A callback function is a function that is passed as an argument to another function. The callback function is then invoked at a later point in time, often after some kind of event or operation has been completed. This is what makes it a callback.

```
function greeting(name, callback) {
  console.log("Hello, " + name);
  callback();  // The callback function is called here
}

function goodbye() {
  console.log("Goodbye!");
}

// Pass the 'goodbye' function as a callback to 'greeting'
greeting("Alice", goodbye);

```

## What is callback hell?

Callback hell (also known as Pyramid of Doom) is a term used to describe the situation in JavaScript where callbacks are nested within other callbacks, creating code that becomes deeply indented and hard to read, understand, and maintain. This usually happens when multiple asynchronous operations, like reading files, making API requests, or handling events, are chained together using callbacks.

Below is example for nested callback,  callback hell, inversion of control
 * createOrder
 * proceedPayment
 * orderSummery
 * updateWallet
 * Managing code is hard, pyramid of Doom, creating callback hell, and also losing control of code which raises inversion control

```

doSomething(function(err, result) {
  if (err) {
    console.log("Error:", err);
  } else {
    doSomethingElse(result, function(err, result2) {
      if (err) {
        console.log("Error:", err);
      } else {
        doYetAnotherThing(result2, function(err, result3) {
          if (err) {
            console.log("Error:", err);
          } else {
            // Continue processing
            console.log("Final Result:", result3);
          }
        });
      }
    });
  }
});
```

**Why does Callback Hell happen?**
When you have multiple asynchronous tasks that depend on one another, you often need to pass callbacks to handle the results of each task.
As each callback may also require another callback (for the next step in the process), the code can become deeply nested and harder to manage.

**Why is Callback Hell a Problem?**
Readability: As the number of nested callbacks increases, the code becomes harder to read and understand.
Maintainability: Adding more functionality can lead to more deeply nested callbacks, which makes future changes difficult and error-prone.
Error Handling: Handling errors in deeply nested callbacks can be tricky and lead to repetitive code.

## What is Promise?

A Promise is a JavaScript object that represents the eventual completion or failure of an asynchronous operation (such as I/O operations). A Promise can be in one of three states: pending, fulfilled, or rejected.

A Promise is created using the new Promise() constructor, which accepts a function called the executor. This function takes two parameters: resolve and reject. The resolve function is called when the asynchronous operation succeeds, while the reject function is called when it fails.

```
// Creating a Promise
let myPromise = new Promise(function(resolve, reject) {
  let success = true; // Change this to false to simulate failure
  
  if (success) {
    resolve("The operation was successful!");
  } else {
    reject("The operation failed.");
  }
});

// Consuming the Promise
myPromise
  .then(function(result) {
    console.log(result); // This will be called if the promise is resolved
  })
  .catch(function(error) {
    console.log(error); // This will be called if the promise is rejected
  });

// Using async/await to consume the Promise
async function executeOperation() {
  try {
    let result = await myPromise; // Await the Promise
    console.log(result); // This will be called if the promise is resolved
  } catch (error) {
    console.log(error); // This will be called if the promise is rejected
  }
}

executeOperation();

```

## What are promise APIs?
 
**Promise.all()** is used to execute multiple promises in parallel and wait for all of them to settle (either resolve or reject).

It takes an array of promises as an argument and returns a single promise that resolves when all promises in the array have resolved, or rejects if any one of them fails.

The result of Promise.all() is an array of results from all the promises, in the same order as the input array.

If any of the promises reject, Promise.all() immediately rejects with the reason of the first rejected promise, without waiting for other promises to settle.

**Key Points:**
All promises must resolve for the result to be returned.

If any promise rejects, the returned promise rejects immediately, and the error is thrown as the rejection value.

```
function resolveAfter(time, value) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), time);
  });
}

function rejectAfter(time, reason) {
  return new Promise((_, reject) => {
    setTimeout(() => reject(reason), time);
  });
}

// Creating some promises to resolve and reject
const promise1 = resolveAfter(1000, 'v1');
const promise2 = resolveAfter(2000, 'v2');
const promise3 = rejectAfter(1500, 'Error in promise 3');
const promise4 = resolveAfter(3000, 'v4');

// Using Promise.all
Promise.all([promise1, promise2, promise3, promise4])
  .then((results) => {
    console.log("All promises resolved:", results);  // This won't run if any promise is rejected
  })
  .catch((error) => {
    console.log("Promise rejected with error:", error);  // This will run if any promise fails
  });

Note:
In this example, promise3 rejects after 1.5 seconds, so Promise.all() will immediately reject, and the remaining promises (promise1, promise2, promise4) are not waited for.
```

**Promise.allSettled()** is a method that waits for all promises to settle, regardless of whether they resolve (succeed) or reject (fail). Unlike Promise.all(), which rejects immediately if any promise fails, Promise.allSettled() ensures that all promises complete and provides an array of results, indicating whether each promise was resolved or rejected.

```

function resolveAfter(time, value) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), time);
  });
}

function rejectAfter(time, reason) {
  return new Promise((_, reject) => {
    setTimeout(() => reject(reason), time);
  });
}

// Creating some promises to resolve and reject
const promise1 = resolveAfter(1000, 'v1');
const promise2 = resolveAfter(2000, 'v2');
const promise3 = rejectAfter(1500, 'Error in promise 3');
const promise4 = resolveAfter(3000, 'v4');

// Using Promise.allSettled
Promise.allSettled([promise1, promise2, promise3, promise4])
  .then((results) => {
    console.log("All promises settled:", results);
  });

//====Output 
All promises settled: [
  { status: "fulfilled", value: "v1" },
  { status: "fulfilled", value: "v2" },
  { status: "rejected", reason: "Error in promise 3" },
  { status: "fulfilled", value: "v4" }
]
```

**Promise.race()** is a method that waits for the first promise to settle (either fulfill or reject). As soon as one of the promises settles (either resolves or rejects), Promise.race() immediately settles with the result of that first settled promise. The remaining promises are ignored once the first one has settled.

**Promise.any()** is wait for the first settled promise with a successful value. If all promises are rejected, it returns an aggregated error.


## What is event loop in javascript?

JavaScript is a fascinating single-threaded, non-blocking, asynchronous, and concurrent language. If this sounds complex, don't worry! Let's break it down into simple terms by exploring the Event Loop, Call Stack, Microtask Queue, and Macrotask Queue.

**Call Stack:**

Imagine the call stack as a list where JavaScript keeps track of function calls. When you call a function, it gets added to the top of this list. Once the function finishes, it’s removed. If a function calls another function, the new one gets added to the top, creating a stacking effect.

**Event Loop:**

The event loop is like a diligent coordinator, making sure everything runs smoothly. It watches over the call stack and task queues. If the call stack is empty, it checks the task queues and moves tasks to the call stack for execution. This helps keep your applications responsive and free from freezing.

**Microtask Queue:**

Microtasks are usually promises and mutation observers. When a promise resolves, its .then() callback goes to the microtask queue. Microtasks are the top priority. After finishing a task in the call stack, the event loop first handles all tasks in the microtask queue before moving to the macrotask queue, ensuring crucial operations are done quickly.

**Macrotask Queue:**

Macrotasks include timers (setTimeout, setInterval), I/O operations, and other events. These tasks go into the macrotask queue. The event loop processes them one by one in a first-in, first-out (FIFO) order, but only after the call stack and microtask queue are empty.

**How They Work Together:**

Call Stack Execution: Functions run one at a time.

Microtask Processing: After the call stack is empty, the event loop handles all microtasks.

Macrotask Processing: Once the microtask queue is empty, the event loop processes the next macrotask.

**Visualizing the Flow:**

Call Stack: Functions are added and removed like a stack of dishes.

Microtask Queue: Promises and other high-priority tasks are queued and executed first.

Macrotask Queue: Timers and other lower-priority tasks are queued and executed after microtasks.

![1721185522661](https://github.com/user-attachments/assets/fe7819d6-42a8-42b9-ac38-3bd46dbbd5c3)

## What is Debouncing & Throttling? 

Both are techniques to stop unnecessary API calls which will put a lot of pressure on the server (idea is to limit the frequency of function execution).

**Debouncing:**
On the Flipkart eCommerce website, when you type a product name like 'Notebook', a small delay of approximately 300ms is introduced between each keystroke before making the API call for suggestions. This prevents API calls for every individual keystroke and instead sends a request after the user has stopped typing for a brief moment.

Debouncing waits for a pause in activity before triggering an action.

**Throttling:**
On the Flipkart eCommerce website, when scrolling through the product listings, a request is sent to load more products at a fixed interval of 300ms. Even if the user scrolls continuously, the API call is made only once every 300ms, preventing excessive API calls during fast scrolling.

Throttling ensures the action is performed at regular intervals, regardless of how many times the event is triggered.

```
const debounce = (callback, del) => {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, del);
  };
};

function callMe() {
  console.log("Call Me");
}

const debounceCallme = debounce(callMe, 2000);
debounceCallme();
debounceCallme();
debounceCallme();
debounceCallme();


const throttling = function (cb, dl) {
  let lastTrigger = 0;
  return function () {
    const currTime = Date.now();

    if (currTime - lastTrigger < dl) return;
    lastTrigger = currTime;
    return cb();
  };
};

const throttlingCall = throttling(callMeThrotle, 10);

function callMeThrotle() {
  console.log("callMeThrotle");
}

throttlingCall();
throttlingCall();
throttlingCall();
throttlingCall();
```

## What is about call(), apply(), bind () ?

In JavaScript, call(), apply(), and bind() are methods used to invoke functions with a specified **this** value and **arguments**. **These methods are particularly useful when working with context and function borrowing**. They allow you to set the value of this in different contexts and pass arguments to a function dynamically.

**call()** is used to invoke a function with a specific **this** value and **arguments** passed individually (comma separated values ).
It immediately calls the function with the given this value and arguments.

**apply()** is very similar to call(), but instead of passing the arguments individually, you pass them as an array or array-like object. It is useful when you don’t know the exact number of arguments to pass.

**bind()** is different from call() and apply() because it does not immediately invoke the function. Instead, it returns a new function with the specified **this** value and any pre-set arguments. This new function can be invoked later. It is particularly useful when you need to ensure a function retains a specific this value, even when it's executed in a different context.

```
function fullname(homeTwon, state) {
  console.log(
    this.firstName,
    " ",
    this.lastName,
    "From",
    homeTwon,
    "And State is",
    state
  );
}

const obj1 = {
  firstName: "Senthilkumar",
  lastName: "Karumbairam",
};

const obj2 = {
  firstName: "Sivakumar",
  lastName: "Karumbairam",
};

const obj3 = {
  firstName: "Suresh",
  lastName: "Karumbairam",
};

fullname.call(obj1, "Ariyalur", "Tamilnadu");
// apply
fullname.apply(obj2, ["Trichy", "Tamilnadu"]);
// bind
const callFullname = fullname.bind(obj3, "Pollachi", "Tamilnadu");
callFullname();

```
## Polifils of Function call, call(), apply(), bind()

```
Function.prototype.myCall = function (obj = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("Function is not Callable");
  }
  console.log("Custom Call Method");
  obj.fn = this;
  obj.fn(...args);
};

Function.prototype.myApply = function (obj = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error("Function is not Callable");
  }

  if (!Array.isArray(args)) {
    throw new Error("Arguments are not iteratable");
  }

  console.log("Custom Apply Method");
  obj.fn = this;
  obj.fn(...args);
};

Function.prototype.myBind = function (obj = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("Function is not Callable");
  }
  obj.fn = this;
  return function (...newArgs) {
    console.log("Custom Bind Method");
    return obj.fn(...args, ...newArgs);
  };
};

fullname.myCall(obj1, "Ariyalur", "Tamilnadu");
fullname.myApply(obj1, ["Ariyalur", "Tamilnadu"]);
const myBind1 = fullname.myBind(obj1, "Ariyalur");
myBind1("India");

```

## Polifils of map(), filter(), reduce() Array methods.

```
Array.prototype.myMap = function (cb) {
  let tempResult = [];
  for (let i = 0; i < this.length; i++) {
    tempResult.push(cb(this[i], i, this));
  }
  return tempResult;
};

const testArray = [4, 5, 7];
const result = testArray.myMap((el, idx) => el * 5);

Array.prototype.myFilter = function (cb) {
  let tempResult = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      tempResult.push(this[i]);
    }
  }
  return tempResult;
};

const resultFilter = testArray.myFilter((el, idx) => el > 4);

Array.prototype.myReduce = function (cb, intialValue) {
  let accum = intialValue;

  for (let i = 0; i < this.length; i++) {
    accum = accum ? cb(accum, this[i], i, this) : this[0];
  }

  return accum;
};

const testArray1 = [4, 5, 7];
const result3 = testArray1.myReduce((acc, ele, id, arr) => {
  return acc + ele;
}, 0);

```
