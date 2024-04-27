/**
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
**/

var longestCommonPrefix = function (strs) {
  let prefix = strs[0];

  if (strs.length === 0) {
    return "";
  }

  for (const word of strs) {
    while (word.indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      // prefix = prefix.slice(0, -1);
      if (prefix === "") {
        return "";
      }
    }
  }

  console.log(prefix);
};

var strs = ["flower", "flow", "flight"];
longestCommonPrefix(strs);
