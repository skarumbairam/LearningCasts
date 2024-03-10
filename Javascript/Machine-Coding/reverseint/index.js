// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const sign = Math.sign(n);
  const reverseInt = parseInt(n.toString().split("").reverse().join(""));
  console.log(reverseInt * sign);
  return reverseInt * sign;
}

const reverseStr = reverseInt(2567);
module.exports = reverseInt;
