// Bubble sort

/**
 *
 *  From i = 0 to <arr.length
 *  From j =0 to (arr.length -i)
 *  if the elements at j  is greater then j+1
 *  swap the elements j and j+1
 */

function bubbleSort(arr) {
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const templesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = templesser;
      }
    }
  }

  return arr;
}

const arr = [100, -40, 500, -124, 0, 21, 7];

// Selection sort

/**
 *
 *  From i = 0 to <arr.length
 *  Assume i is min indexOfmin = i
 *  From j =(i+1) to < (arr.length)
 *  If arr[j] is less than arr[indexOfmin] then swap
 *  arr[i] = arr[indexOfmin] (leeser)
 *  arr[indexOfmin] = arr[i]
 */
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }

    if (indexOfMin !== i) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }

  return arr;
}

console.log(selectionSort(arr));
// Merge sort
