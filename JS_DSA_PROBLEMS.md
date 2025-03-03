#### 1. "Contains Duplicate" - Given an integer array nums, return true if any value appears more than once in the array, otherwise return false. Input: nums = [1, 2, 3, 3]

```
Example 1 : Input: nums = [1, 2, 3, 3] // true
Example 2 : Input: nums = [1, 2, 3, 4]  // false

Approach 1 :
   1. Create empty result array
   2. Iterate the given input array and push unique elements to a new array
   3. Before pushing new elements to the result array check if current elements already exist or not 
   4. If Yes return true, or at the end of loop finaly return false

Searching elements inside the array is O(n) operation complexity

Approach 2:
   1. Create empty obj result = {};
   2. Push the array of elements as a key to the object and its index as value {"1": 0} from the above input
   3. Before adding new elements to object, check if the current element is part of the result object
   4. If yes, we can simply return true; else, false.

Checking element inside the object is O(1) operation complexity

//Let's dive into the code

function isContainsDuplicate(input) {
 const result = {};
 return function() {
  for(let i=0; i<input.length; i++) {
   const tempKey = input[i];
     // Check if result object contains key
     if(result.hasOwnProperty(tempKey)) {
       return true;
     }else{
         result[tempKey] = tempKey;
     }
   }
   return false;
 }
}
const checkduplicate = isContainsDuplicate();
console.log(checkduplicate([1, 2, 3, 4,4])) // true

```
#### 2. Valid Anagram - Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.
<sup> An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
  use regex incase removing special characters. </sup>

```
Example 1 : Input: s = "racecar", t = "carrace" // true
Example 2 :Input: s = "jar", t = "jam" // false

Approach 1: (brute force)
  1. Split each string by space string.split("");
  2. Iterate each character and join reversely or use inbuilt methods like reverse().join("")
  3. Then compare two strings each other if same return true else false

Approach 2: (sorting logic, no need to iterate)
  1. Split the string and sort() two strings
  2. Compare two strings and return if not matches

Note:
 const a = str1.toLowerCase().replace(/[^\w]/g, "");
  const b = str2.toLowerCase().replace(/[^\w]/g, "");

function isAnagram (s,t) {

  if(s.length !== t.length) return false;
  const s1 = s.split("").sort().join(""); // ABC
  const t1 = t.split("").sort().join(""); // ABC
  if(s1 === t1) return true
  return false;
}
console.log(isAnagram("ABC", "CAB")); // true;
```

#### 3. Flattening an Array to 'n' depth

```
 Approach 1 : (Using Array's inbuilt methods) 

  1. Check if the input element has array values, using some(Array.isArray) using inbuilt method utill flat evey element 
  2. Use the flat method to get the flat result.flat(1)

function flatteningArray (input, depth=1) {

  let result = [...input];
  let currDepth = 0;

  while( result.some(Array.isArray) && currDepth < depth ) {
    result = result.flat(1); // One level at one time
    currDepth ++;
  }

  console.log(result);
  return result;
}


Approach 2: Recurssive method

const result = [];

function flatArray(arr, depth = 1) {
  for (const ele of arr) {
    if (Array.isArray(ele) && depth > 0) {
      flatArray(ele, depth - 1);
    } else {
      result.push(ele);
    }
  }
  return result;
}

console.log("Flatt arr", flatArray([1, 2, [3, [4]]]) );
const flat = flatArray([1, 2, [3, 4]], 2);

```

#### 4. Split in to small Chunk Arrays from large Array

```
Example 1 : input [1,2,3,4,5,6,7] , 3 // [[1,2,3], [4,5,6], [7]]
Example 2 : input [1,2,3,4,5,6] , 2 // [ [1,2], [3,4] ,[5,6] ]

Approach 1:
   1. Create an empty result array,
   2. Iterate input element and clone values as per the input and push those values to result as array
   3. Check the logic of how to get the start-index and end-index to clone the values in each iteration

function chunkArray (input, size) {
   const result = [];
   for(let i=0; i<input.length; i++) {
      const tempArray = input.slice(i*size, size + i*size);
     if(tempArray.length > 0) {
         result.push(tempArray);
     }
   }
   console.log(result);
}

chunkArray([1,2,3,4,5,6,7] , 3)
```

#### 5. Rotate an Array "K" times

```
Example 1: [1,2,3,4,5,6] , 2 times - [5,6,1,2,3,4]
Example 1: [1,2,3,4,5,6] , 4 times - [3,4,5,6,1,2]

Approach 1: (Brut force approach using inbuilt methods)
   1. Using pop() will help remove last element, unshift() will use insert in to start of an array
   2. We can use both of these methods first remove the last element and push that same element to start of the array
   3. Like input.unshift(input.pop()) "n" times, so the element moved as expectedly

const rotateArrayNtimes = function (array, ntimes) {
  for (let i = 0; i < ntimes; i++) {
    array.unshift(array.pop());
  }
  console.log(array);
};
rotateArrayNtimes([1, 2, 3, 4, 5, 6], 3); // [4,5,6,1,2,3]


Approach 2:
   1. Iterate elements and shift the position of the elements to start of the array by checking n times

function rotateArray(input, ktime) {
   const result = [];
   const N = input.length;
   const K = times;

// Logic
   // input = [0, 1, 2, 3, 4, 5];
  // i =0 ;  input[N - K + i] // 6-3+0 = input[3] =[3]
  // i =1 ;  input[N - K + i] // 6-3+1 = input[4] =[3, 4]
  // i =2 ;  input[N - K + i] // 6-3+2 = input[5] =[3, 4, 5]

 // i = 3 ; input [i-K] // 3 - 3 = input[0] = [3,4,5,0];
 // i = 4 ; input [i-K] // 4 - 3 = input[1] = [3,4,5,0,1];
 // i = 5 ; input [i-K] // 5 - 3 = input[2] = [3,4,5,0,1,2]; 

   for(let i =0 ; i <input.length ; i++) {
      if(i< K) {
         result[i] = input[N - K + i] 
      }else{
          result[i] = input[i - K]
      }
   }

   return result;
}
 
```
