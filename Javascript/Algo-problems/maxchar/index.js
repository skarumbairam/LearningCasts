// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/**
 * Iterate the string and store each elements as key in object with no of couts
 * Iterate object and get max no of charector
 */
function maxChar(str) {
  const charMap = {};
  let getMaxChar = 0;
  let result = "";
  let keyValue = "";
  for (const element of str.split("")) {
    if (!charMap[element]) {
      charMap[element] = 1;
    } else {
      charMap[element]++;
    }
  }

  for (const key in charMap) {
    if (charMap[key] > getMaxChar) {
      getMaxChar = charMap[key];
      result = key;
      keyValue = getMaxChar;
    }
  }

  console.log(result, ":", keyValue);
}

maxChar("abcccccccd");

module.exports = maxChar;
