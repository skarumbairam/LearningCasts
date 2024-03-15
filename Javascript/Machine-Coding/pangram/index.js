//A pangram is a sentence that contains every single letter of the alphabet at least once.

/**
 * var sentance = "The quick brown fox jumps over he lazy dog"
 * isPangram(sentance) => true
 */

function checkPangram(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxy";
  const tempStr = str.toLowerCase();
  for (i = 0; i < alphabet.length; i++) {
    if (tempStr.indexOf(alphabet[i]) < 0) {
      return false;
    }
  }
  return true;
}

const check = checkPangram("The quick brown fox jumps over the lazy dog");
console.log(check);

// approch 2

function isPangram(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxy".split("");
  return alphabet.every((x) => str.includes(x));
}

const approch2 = isPangram("The quick brown fox jumps over the lazy dog");
console.log("approch2", approch2);
