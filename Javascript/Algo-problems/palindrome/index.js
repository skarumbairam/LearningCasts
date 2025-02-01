// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  const reveseStr = str.split("").reverse().join("");
  return str === reveseStr;
}
const isPalindrome = palindrome("abcdefg");
console.log(isPalindrome);

module.exports = palindrome;

/*
Leet code problem
var isPalindrome = function(x) {
  const strArray = x.toString().split('');

  let start = 0;
  let end = strArray.length -1;
  let result;
  while(start<end){
      const tempStart = strArray[start]
      strArray[start] = strArray[end];
      strArray[end] = tempStart;
      start++;
      end--;
  }
  result = parseInt(strArray.join(""));
  
  return result === x;
};

console.log(isPalindrome(121))
*/
