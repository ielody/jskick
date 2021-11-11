//Return the numbers multiplied

var values = [2,3,4,5,6,7]

function multiply(accumulator, currentValue) {
    return accumulator * currentValue
}
let result = values.reduce(multiply)
console.log(result)
// return: 5040 (Number)
