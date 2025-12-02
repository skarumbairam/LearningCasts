#### Searching Algorithm 

##### 1. Linear Search 
```
const input = [1,5,7,8,11,3,6]; 
target = 11;
function linearSearch (input, target) {
   for(let i=0; i<input.length; i++) {
      if(input[i]=== target) {
         return i;
      }
   }
   return -1;
}
linearSearch(input, target);

// Global Linear Search

function globalLinearSearch (input, target) {
   const result = [];
   for(let i=0; i<input.length; i++) {
      if(input[i]=== target) {
         result.push(i);
      }
   }

   if(result.length > 0) return result;
   return -1;
}

// O(n) Complexity 
// O(1) / O(n) Space Complexity 
```

##### 2. Binary Search 
<sup> ** </sup> Binary Search can only for sorted Array of elements.

```
function binarySearch (array, target) {

   let start = 0;
   let end = array.length;
   let input = array.sort((a,b) => a-b);
   console.log(input);
   
   while(start <= end) {
      const mid = Math.floor((start+end)*0.5); 
      if(input[mid] === target) {
         return mid;
      }else if(input[mid] < target) {
         start = mid +1;
      } else {
         end = mid - 1;
      }
   }
   return -1;
}

const input = [1,3,5,6,8,11]; 
target = 5;

console.log("Index is ::", binarySearch(input, target));

// O log(n) Complexity 
// O(1) Space Complexity 

```

#### Sorting Algorithms 

Reference & Animaiton : https://visualgo.net/en/sorting

##### 1. Bubbule Sort 
- Concept of bubble sort is take two elements at a time and compare it which one smaller 
- And swap them the position based the value
- Important note is inner loop condition (length - 1 - i)

```
   function bubbleSort (input) {
      const n = input.length;
      for(let i=0 ; i< n; i++){
         for(let j=0; j<n-1-i; j++) {
            if(input[j] > input [j+1]){
                  [input[j], input[j+1]] = [input[j+1], input[j]]
            }
         }
      }
      console.log(input);
   }

const input = [0,1,2,-2,-1,5]
bubbleSort(input);

- Time Complexity O(n^2)
- Space Complexity O(1)
```

##### 2. Selection Sort

- Select one element compare with all other elements 
- And then find small elements and swap to the position
```
function selectionSort (input) {
   const n = input.length;
   for(let i=0 ; i<n ; i++){
      let currMinIndex = i;
      for(let j = i+1; j< n; j++){
         if(input[j] < input[currMinIndex]) {
            currMinIndex = j;
         }
      }
      
      if(currMinIndex !==i ){
         [input[i], input[currMinIndex]] = [input[currMinIndex], input[i]]
      }
   }
   console.log(input)
}
const input = [0,55,1,4,50,34,3]
selectionSort(input);

const input = [0,1,2,-2,-1,5]
selectionSort(input);

- Time Complexity O(n^2)
- Space Complexity O(1)

```

##### 3. Insertion Sort

- Select a portion ofthe  array and sort them 
- Start from 1st position so that we will have a portion of the array (0,1)
- In the next iteration, we can compare (0,1,2) backwards
```

function insertionSort (input) {
   const n = input.length;

   for(let i=1; i< n; i++){
      const key = input[i];
      let j = i - 1; // Previous value
      while(j>=0 && input[j] > key) {
         input[j+1] = input[j];
         j--;
      }
      input[j+1] = key;
   }
   console.log(input)
}
const input = [-5, 0,1,2,-2,-1,-3, 1,99]
insertionSort(input);

```
##### 4. Merge Sort

```
TO DO
```


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

#### 6. Flattern Object of nested one

```
Approach 1 :
 const user = {
   family: {
      "daddy": "Senthil",
      "mom": "Hema",
      "children": {
         "son": "Havish",
         "daughter": "Dharani"
      }
   }
}

Expected Output 1:
{
 "user.family.daddy" : "Senthil"
 "user.family.mom" : "Hema",
 "user.family.children.son": "Havish",
 "user.family.children.daughter": "Dharani",
}

Output 2:
{
 "family.daddy": "Senthil"
 "family.mom": "Hema",
 "family.children.son": "Havish",
 "family.children.daughter": "Dharani",
}


function flattenObject(obj, parentKey = "", result = {}) {
  for (let key in obj) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;

    if (typeof obj[key] === "object" && obj[key] !== null) {
      flattenObject(obj[key], newKey, result);
    } else {
      result[newKey] = obj[key];
    }
  }
  console.log(result);
  return result;
}

flattenObject(userObj, "user" , result = {});

```

#### 7. Memoization example in javascript

```

Approach 1:

   1. Lets create a heavy calculation function "product" which accepts arguments
   2. Create memoize function which will accept the product funciton as arguments
   3. Create obj push function arguments as key and result of the function as value
   4. When next time executing same function will check the same params as key in the object, if yes return quickly from object instead calculating

function momized (fun) {
    const cache = {};
    return function (..args) {
        let key = JSON.stringify(args);
        if(cache[key]) {
            console.log("Value Return From Cache", key)
            return cache[key];
        }
        const result = fn.apply(this, args);
        cache[key] = result;
        return result;
    }
}

function product (a, b) {
  for(let i=0; i<10000000; i++){};
  return a * b;
}


const calculateMemoized = memoized(product)

console.time("First Call");
calculateMemoized(23, 10);
console.timeEnd("First Call");

console.time("Second Call");
calculateMemoized(23, 10);
console.timeEnd("Second Call");

```

#### 8. Given a string array of words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order. (Leet Code 1002)
```
Input: words = ["bella","label","roller"]
Output: ["e","l","l"]


const commonChars = (arr) => {
  const map = [];
  const result = [];

// Generate Frequesncy of each word's letter
  function frequency (word) {
    const obj = {};
    for(let i=0 ; i<word.length;i++) {
      const tempKey = word[i];
      
      if(obj.hasOwnProperty(tempKey)) {
        obj[tempKey] ++;
      }else{
        obj[tempKey] = 1;
      }
    }
    return obj;
  }

// Push frequency to array
  for(let el of arr) {
    const frequencyCountObj = frequency(el);
    map.push(frequencyCountObj);
  }
  
   console.log(map)

// Take first word, check each letter exist inside frequency object
  for(let char of arr[0] ){
   const checkLetterExist = map.every( word => (word[char]) ) // When condition matches true push that charecter to result array
     if(checkLetterExist)  {
       result.push(char)
     }
  }
    console.log(result)
}

commonChars(arr);

```
#### 9. Best Time to Buy and Sell Stock (Leet Code : 121)

```
function maxProfit () {
   const prices = [7,1,3,5,8,9]
   let maxProfit = 0;
   for( let i= 0 ; i <prices.length ; i++){
      for(let j = i+1; j<prices.length; j++){
         const currProfit = prices[j] - prices[i];
         maxProfit = Math.max(maxProfit, currProfit);
      }
   }
   console.log(maxProfit);
   return maxProfit;
}
```

#### 10. Find All Duplicates in an Array (Leet Code : 442) 

```
function findAllDuplicates () {
   const input = [4,3,2,7,8,2,3,1]
   let result = [];
   
   for( let i= 0 ; i <input.length ; i++){
      const currEl = input[i]
      if(input.lastIndexOf(currEl) !== i){
        result.push(currEl);
      }
   }
 console.log(result);
}

findAllDuplicates();

```

#### 11. Max Sub Array (Leet Code : 53) 

```
// Approach 1: 

function maxSubArray () {
   const input = [-2,1,-3,4,-1,2,1,-5,4]
   let maxVal = 0;
   
   for( let i= 0 ; i <input.length ; i++){
      let currSum=0;
     
      for(let j=i+1; j<input.length; j++){
        currSum = currSum + input[j];
        maxVal = Math.max(maxVal, currSum);
      }
   }
 console.log(maxVal);
}

maxSubArray();

// Approach 2:

const maxSubArr = function () {

  const input = [-2,1,-3,4,-1,2,1,-5,4]
  let maxSum = 0;

  // optional
  let startIndex = 0;
  let lastIndex = 0;

  for (let i = 0; i < array.length; i++) {
    let currentMax = 0;
    for (j = i; j < array.length; j++) {
      currentMax = currentMax + array[j];
      if (currentMax > maxSum) {
        maxSum = currentMax;
        startIndex = i;
        lastIndex = j;
      }
    }
  }
}

// We can slice if needed the elements of max sum
maxSubArr()
```

#### 12. Longest Common Prefix (Leet Code : 14) 

```
var longestCommonPrefix = function (strs) {
  let prefix = strs[0];

  if (strs.length === 0) {
    return "";
  }

  for (const word of strs) {
    while (word.indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") {
        return "";
      }
    }
  }
  console.log(prefix);
};

var strs = ["flower", "flow", "flight"];
longestCommonPrefix(strs);

```
#### 12. Longest Common Subsequence (Leet Code : 1143) 

```
var longestCommonSubstring = function (strs) {
   let base = strs.reduce((a, b) => a.length <= b.length ? a : b);
   let longestCommon = '';
   
   for(let i=0; i<base.length ; i++){
     for(let j=i+1; j<=base.length; j++){
       let substring = base.slice(i, j);
       
       const checkStrIncludes = strs.every(str => str.includes(substring));
        // Check if substring exists in all other strings
      if (checkStrIncludes) {
        if (substring.length > longestCommon.length) {
          longestCommon = substring;
        }
      }
     }
   }
    console.log("longestCommon", longestCommon)
};

const strings = ["frontenddeveloper", "backenddeveloper", "fullstackdeveloper"];
longestCommonSubstring(strings);

```
#### 13. Maximum Count of Positive Integer and Negative Integer (Leet code : 2529)

```
   function maxCountPositiveNegativeInteger (array) {
  
  const positiveResult = [];
  const nagativeResult = [];
  
  for(let i=0 ; i< array.length ; i++){
    if(array[i] > 0) {
      positiveResult.push(array[i])
    }
    
    if(array[i] < 0) {
      nagativeResult.push(array[i])
    }
  }
  
  const result = Math.max(positiveResult.length, nagativeResult.length);
  
  console.log(result);
  return result;
  
  
}

const input = [-2,-1,-1,1,2,3] 
maxCountPositiveNegativeInteger(input);

```
