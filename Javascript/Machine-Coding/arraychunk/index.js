// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

/**
 *
 * iterate over array copy the elements from array w.r.t expected size
 * Push to new array , the new array will be pshed to result array [ [newarray], [newarray] ]
 * Slice reperesents the (startIndexofItem, endIndexOfItem) fyi- endindex is not inclusive
 */
function chunk(array, size) {
  const chunked = [];
  for (let i = 0; i < array.length; i++) {
    const lastElement = chunked[chunked.length - 1];

    if (!lastElement || chunk.length === size) {
      chunked.push([array[i]]);
    } else {
      lastElement.push([array[i]]);
    }
  }

  console.log(chunked);
}

chunk([1, 2, 3, 4, 5, 6, 9, 7], 3);

/*

function chunk(array, size) {
    const chunked = [];
  
    for (let i = 0; i < array.length; i++) {
      const tempArray = array.slice(i * size, i * size + size);
      // console.log(tempArray);
      if (tempArray.length > 0) {
        chunked.push(tempArray);
      }
    }
  
    console.log(chunked);
  }


  function chunk(array, size) {
  const chunked = [];
  const copyArry = array.slice(0, array.length);
  for (let i = 0; i < array.length; i++) {
    const tempArray = copyArry.splice(0, size);
    if (tempArray.length > 0) {
      chunked.push(tempArray);
    }
  }
  console.log(chunked);
}


  */
