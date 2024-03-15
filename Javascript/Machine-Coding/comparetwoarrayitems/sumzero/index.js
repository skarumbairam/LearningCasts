// Write a function sumZero which accepts a sorted array of integers . The funtion should find the first pair where the sum 0.

const a = [-1, -2, -3, -4, 0, 3, 4, 5, 6];
//a.sort((a, b) => a - b); // [-4,4]

//approach 1
function sumZero(arr) {
  console.log(arr);
  for (i = 0; i < a.length; i++) {
    // n
    for (j = i + 1; j < a.length; j++) {
      // n
      if (a[i] + a[j] === 0) {
        console.log([a[i], a[j]]);
        return;
      }
    }
  }
}
//sumZero(a); // [-3,3]

//approach 2

function sumZero1(arr) {
  //arr.sort((a, b) => a - b);
  console.log(arr);
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while (leftPointer < rightPointer) {
    let sum = arr[leftPointer] + arr[rightPointer];
    console.log("sum ::::", arr[leftPointer], arr[rightPointer]);
    if (sum === 0) {
      console.log([arr[leftPointer], arr[rightPointer]]);
      return;
    } else if (sum > 0) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }
}
sumZero1(a);
