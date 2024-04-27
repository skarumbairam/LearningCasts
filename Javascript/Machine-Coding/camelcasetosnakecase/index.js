/*

Write a function to convert a string from camel case to snake case. 
for e.g 
input : thisIsATest 
output : This_Is_A_Test
*/

function trasnformStr(str) {
  let newStr = str[0].toUpperCase();
  const dash = "_";

  for (let i = 1; i < str.length; i++) {
    if (str[i].toUpperCase() === str[i]) {
      console.log("match with uppercase");
      newStr = newStr + dash + str[i];
    } else {
      newStr = newStr + str[i];
    }
  }

  console.log(newStr);
}

trasnformStr("thisConsceptOfReact");
