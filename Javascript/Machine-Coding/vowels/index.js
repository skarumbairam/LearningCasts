/**
 * Write a function that returns the number of vowels used in a string.
 * Vowels are the characters a, e, i, o, and u
 * vowels('Hi There!'); --> 3
 * vowels('Why do you ask?'); --> 4
 * vowels('Why?'); --> 0
 */

function vowels(str) {
  const vowel = "aeiou";
  const strArray = str.split("");
  let count = 0;
  for (let char of strArray) {
    if (vowel.includes(char)) {
      count++;
    }
  }

  return count;
}

const vowelCount = vowels("Hi There!");
console.log(vowelCount);
