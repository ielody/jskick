//Return odd numbers
1.
var values = [1,2,3,4,5,6,7,8,9,10]

function isEven(num) {
    return (num % 2 == 1)
  }
values = values.filter(isEven)
console.log(values)

2.
num => num % 2 == 1
vals = values.filter(isEven)
console.log(vals)

3.
values = values.filter((num => num % 2 == 1))
console.log(values)