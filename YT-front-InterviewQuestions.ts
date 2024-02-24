// function add(a: number, b: number): number{
//   if (typeof a !== "number") {
//     throw new Error("First argument must be number")
//   }
//   if (typeof b !== "number") {
//     throw new Error("Second argument must be number")
//   }
//   return a + b
// }

// console.log(add(3, "b"))

/* ------------------------------------------------------------- */

// function evenArray(arr: number[]): number[] {
//   for (const elm of arr) {
//     if (typeof elm !== 'number') {
//       throw new Error("Every element of the array should be a number")
//     }
//   }
//   return arr.filter((elm: number) => elm % 2 == 0)
// }

// console.log(evenArray([1, 4, 6, 3, 3, 9, 10, 1.1]))

/* ------------------------------------------------------------- */

// function arrayPlusIndex(arr: number[]): number[] {
//   for (const elm of arr) {
//       if (typeof elm !== 'number') {
//         throw new Error("Every element of the array should be a number")
//       }
//     }
//   let newArr: number[] = []
//   for (const idx in arr) {
//     newArr.push(arr[idx] + Number(idx))
//   }
//   return newArr
// }

// console.log(arrayPlusIndex([0, 0, 0, 0, 0]))

/* ------------------------------------------------------------- */

// function flattenMatrix(matrix: number[][]): number[] {
//   // Function that converts a 2d array in 1d
//   let newMatrix: number[] = []
//   // console.log(`Matrix before transformation ${matrix}`)
//   for (const row of matrix) {
//     newMatrix.push(...row)
//   }
//   return newMatrix
// }
// console.log([[1, 2, 3], [4, 5, 6], [2], [2, 3, 4, 5, 3, 2, 1]])
// console.log(flattenMatrix([[1, 2, 3], [4, 5, 6]]))


/* ------------------------------------------------------------- */

/**
 * Fill an array with new indexes randomly from 0 to length - 1.
 * Make sure that if the number is already on the array, it needs to generate
 * another.
 * With this array, generate a newArr that will have the values of the 
 * original array in the position indicated by the index located in the same
 * position of the current position of the newArr.
 * */

function shuffleArray(originalArr: number[]): number[] {
  const newArr: number[] = []
  const indexArr: number[] = []
  const originalLength = originalArr.length
  while (indexArr.length < originalLength) {
    const newNum = Math.round((Math.random() * (originalLength - 1)))
    if (!indexArr.includes(newNum)) {
      indexArr.push(newNum)
    }
  }
  for (let idx = 0; idx < originalLength; idx++) {
    newArr.push(originalArr[indexArr[idx]])
  }
  return newArr
}

console.log(shuffleArray([1, 3, 4, 5, 6]))