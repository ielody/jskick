
var obj = {a:1}
// var objB = {b:2}
// var objC = {c:3}

function nestObj(obj) {
  obj.a = {}
  obj.a.b = 2
  obj.a.c = 3
  obj.a.d = {}
  obj.a.d.e = 4
  return obj
}

console.log(nestObj(obj))
// return: {"a":{"b":2,"c":3,"d":{"e":4}}} (Object)

