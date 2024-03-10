// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/**
 *
 * Check string can be cleaned (helper )
 * Push one string's charectors to one Obj by iterating the string (helper)
 * Compare two object's keys and its value
 *
 */

const cleanString = (str) => {
  const cleanStr = str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
  return cleanStr;
};

const getStringObj = (str) => {
  const cleanStr = cleanString(str);
  const obj = {};
  for (let i = 0; i < cleanStr.length; i++) {
    const tempChar = cleanStr[i];
    if (obj[tempChar]) {
      obj[tempChar]++;
    } else {
      obj[tempChar] = 1;
    }
  }
  return obj;
};

function anagrams(stringA, stringB) {
  const strA = getStringObj(stringA);
  const strB = getStringObj(stringB);
  if (Object.keys(strA).length !== Object.keys(strB).length) return false;
  for (const key in strA) {
    if (strA[key] !== strB[key]) return false;
  }

  return true;
}

const anagram = anagrams("RAIL! SAFETY!", "fairy tales");

console.log(anagram);
