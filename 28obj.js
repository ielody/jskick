
//Return all values larger than 5 and less than 10

var obj = {"a":3,"b":6,"c":7,"d":9,"e":11}

var keys = Object.entries(obj).filter(([, v]) => v > 5 && v < 10).map(([k]) => k)
console.log(keys)

// return: [6,7,9] (Array)
