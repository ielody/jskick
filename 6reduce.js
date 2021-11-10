
//Return the sum of all the numbers using reduce
var values = [5,2,3,4,5,3,2,8,9,2]
function sum(accumulator, currentValue) {
  return accumulator + currentValue
}
let result = values.reduce(sum)
console.log(result)

// return: 43 (Number)

//let values = [5,2,3,4,5,3,2,8,9,2]
let answer = values.reduce((acc, cur) => acc + cur)
console.log(answer)