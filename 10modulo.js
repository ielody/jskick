1.
var values = [1,2,3,4,5,6,7,8,9,10]

function isEven(num) {
    return (num % 3 == 0)
  }
values = values.filter(isEven)
console.log(values)

2.
num => num % 3 == 0
vals = values.filter(isEven)
console.log(vals)

3.
values = values.filter((num => num % 3 == 0))
console.log(values)