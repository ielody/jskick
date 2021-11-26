//Return the plain object

var obj = {a:1}

function plainObj(obj) {
  delete obj.a
  obj.b = 2
  obj.c = 3
  obj.d = 4
  return obj

}

console.log(plainObj(obj))
