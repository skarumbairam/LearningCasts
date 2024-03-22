var num = 4;

function a() {
  console.log(num);
  var num = 1;
  let num2 = 3;

  console.log(num);
}
console.log(num);
a();

//4, undefined, referenceError 1
