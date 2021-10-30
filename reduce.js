// values: [5,2,3,4,5,3,2,8,9,2] (Array)

const values = [5,2,3,4,5,3,2,8,9,2]
const reducer = (previousValue, currentValue) => previousValue + currentValue

console.log(values.reduce(reducer))
// return: 43 (Number)