//Return the sum of the numbers

var numbers =[[1,3],[2,5],[6,9]]

function sumNumb(acc, curr) {
     return acc + curr
}
let values = numbers.flat().reduce(sumNumb)
console.log(values)

//Returns 26