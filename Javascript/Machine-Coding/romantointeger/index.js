//Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

const romanToInt = function (s) {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const integers = s.split("").map((x) => roman[x]);
  let result = integers.reduce(
    (acc, x, i) => (x < integers[i + 1] ? acc - x : acc + x),
    0
  );
  console.log(result);
};

romanToInt("MCMXCIV"); // 1994

/**
var romanToInt = function(s) {
    const roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
      };
    
      const sArray = s.split("");
      let result = 0;
    
      for (let i = 0; i < sArray.length; i++) {
        const currVal = roman[sArray[i]];
        const nextVal = roman[sArray[i + 1]];
    
        if (currVal < nextVal) {
          result = result + nextVal - currVal;
          i++;
        } else {
          result = result + currVal;
        }
      }
      return result;
    };

    **/
