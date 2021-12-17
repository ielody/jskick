//Return the array as object

var numbers = [[1,3],[2,5],[6,9]]

function arrToObj(numbers) {
  return Object.fromEntries(numbers)
}

console.log(arrToObj(numbers))
// return: {"1":3,"2":5,"6":9} (Object)
