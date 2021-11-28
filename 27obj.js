//Return all keys that have values larger than 5

var obj = {"a":3,"b":6,"c":7,"d":9,"e":1}

function moreThanFive(obj) {
  return Object.entries(obj)
  .filter(([, values]) => values > 5)
  .map(([keys]) => keys)
}

console.log(moreThanFive(obj))
// return: ["b","c","d"] (Array)