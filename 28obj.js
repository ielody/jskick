//Return all values larger than 5 and less than 10

var obj = {"a":3,"b":6,"c":7,"d":9,"e":11}

function fiveTen(obj) {
  return Object.entries(obj).filter(([, values]) => values > 5 && values < 10)
  .map(([keys]) => keys)
}

console.log(fiveTen(obj))

// return: [6,7,9] (Array)
