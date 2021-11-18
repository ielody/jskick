// Return the array sorted numbers: [2,3,5,4,6,9,8,7,1,10] (Array)

var numbers = [2,3,5,4,6,9,8,7,1,10]

function compareNum(a, b) {
  return a - b
}

var result = numbers.sort(compareNum)
console.log(result)


// return: [1,2,3,4,5,6,7,8,9,10] (Array)