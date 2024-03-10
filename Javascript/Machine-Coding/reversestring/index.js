// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

const reverse = (str) => {
  const reverseStr = str.split("");
  return reverseStr.reduce((reverse, char) => (reverse = char + reverse), "");
};

console.log(reverse("apple"));

module.exports = reverse;

// Brutforce Approach - str.split("").reverse().join("");

// Loop Approach :

/*
const reverse = (str) => {
    const reverseStr = str.split("");
    let result = "";
    for (const char of reverseStr) {
      result = char + result;
    }
    return result;
  };
*/
