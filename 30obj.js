
//Find object with key equal to 'c'

var arr = [{"a":3},{"b":6},{"c":7}]

function equalToC(arr) {
     return arr.c
}
console.log(arr.find(equalToC))

//return {"c":7}