// Given a list of numbers, print them and their number of occurrences

const countNumberInList = (numbers: Number[]): void => {
  /**
   * countNumberInList receives a list and prints a summary of how many times
   * each number appears in the list
   * 
   * @numbers: the list to be analyze
  */
  let summary: Object = {}
  for (const num of numbers) {
    if (Object.keys(summary).includes(String(num))) {
      summary[String(num)]++
    } else {
      summary[String(num)] = 1
    }
  }

  for (const [key, value] of Object.entries(summary)) {
    console.log(`Number ${key} appears ${value} times`)
  }
}

countNumberInList([1, 1, 3, 2, 1, 1])