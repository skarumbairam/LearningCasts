//BigO is O(log n) ~O(1)

function binarySearch(arr, target) {
  const array = arr.sort((a, b) => a - b);
  // [1,  6,  9, 16, 23, 23, 32, 43, 45, 64, 67, 98, 234]
  let start = 0;
  let end = array.length - 1;
  let mid = Math.floor((start + end) * 0.5);

  O(logn);
  while (array[mid] !== target && start <= end) {
    if (array[mid] < target) {
      start = mid + 1;
    } else if (array[mid] > target) {
      end = mid - 1;
    }
    mid = Math.floor((start + end) * 0.5);
  }

  console.log(start, mid, end);
  if (array[mid] === target) {
    return mid;
  } else {
    return -1;
  }

  //return index and value
}

const array = [1, 23, 45, 67, 23, 98, 234, 64, 32, 16, 6, 9, 43];
binarySearch(array, 43);
