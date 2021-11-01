// Return the first five numbers using filter
//values: "1,2,3,4,5,6,7,8,9,10" (String)

function fiveNumbers(values) {
  return values <= 5
}
var filtered = [1,2,3,4,5,6,7,8,9,10].filter(fiveNumbers)
console.log(filtered)

// return: "1,2,3,4,5" (String)