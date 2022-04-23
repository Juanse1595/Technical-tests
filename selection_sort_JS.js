/* Make a function that receives an array as a parameter and sorts it
This example is using Selection sort */

const selectionSort = (array) => {
  console.log(array)
  for(let idx = 0; idx < array.length; idx++) {
    let min_idx = idx;
    for(let idx_2 = idx + 1; idx_2 < array.length; idx_2++) {
      if (array[idx_2] < array[min_idx]) {
        min_idx = idx_2;
      }
    }
    // switch
    array[idx], array[min_idx] = array[min_idx], array[idx]
  }
  console.log(array)
}

selectionSort([3, 0, 0, 1, 51, -9, 152, 3, 3, 2])