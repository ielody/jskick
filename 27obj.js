//Return all keys that have values larger than 5

const obj = {"a":3,"b":6,"c":7,"d":9,"e":1}

var keys = Object.entries(obj).filter(([, v]) => v > 5 ).map(([k]) => k)
// return: ["b","c","d"] (Array)
console.log(keys)