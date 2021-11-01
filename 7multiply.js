// values: [2,3,4,5,6,7] (Array)

const values = [2,3,4,5,6,7]
const reducer = (previousValue, currentValue) => previousValue * currentValue

console.log(values.reduce(reducer))
// return: 5040 (Number)
