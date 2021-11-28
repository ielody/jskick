// /Merge the two objects
var obj1 = {"a":3,"b":4}
var obj2 = {"b":6,"c":7}

function mergeObj(obj1, obj2) {
  return Object.assign(obj1, obj2)
}
console.log(mergeObj(obj1, obj2))
// return: {"a":3,"b":6,"c":7} (Object)