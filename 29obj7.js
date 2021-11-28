//Delete all keys larger than 7
var obj = {"a":3,"b":6,"c":7,"d":9,"e":11}

function largerThanSeven(obj) {
 Object.keys(obj).map(values =>
    obj[values] > 7 ? delete obj[values] : values)
    return obj
 }

console.log(largerThanSeven(obj))
// return: {"a":3,"b":6,"c":7} (Object)
