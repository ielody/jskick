
//Return the object with the 'd' key added
var obj = {"a":1,"b":2,"c":3}

function addKey(obj) {
  obj.d = 4
  return obj
}

console.log(addKey(obj))
// return: {"a":1,"b":2,"c":3,"d":4} (Object)