/***
 *
 * Print out the n-th entry in the fibonacci series.
 * The fibonacci series is an ordering of numbers where each number is the sum of the preceeding two.
 * For example, the sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34] forms the first ten entries of the fibonacci series.
 *
 *
 */

//approach 1
const result = [0, 1];
function fib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}

fib(5);

/*

Approach 1
function fib(n) {
    //  0, 1, 1, 2, 3
  
    const result = [0, 1];
    if (n < 2) return arr;
    for (i = 2; i <= n; i++) {
      const a = result[i - 1];
      const b = result[i - 2];
      result.push(a + b);
    }
    return result[result.length - 1];
  }



  // Apporach 2
const result = [0, 1];
function fib(n) {
  if (n < 2) return result;
  if (n > 2) {
    const a = result[result.length - 1];
    const b = result[result.length - 2];
    result.push(a + b);
    fib(n - 1);
  }
}


// if only returns number
const result = [0, 1];
function fib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}

fib(5);

  */
