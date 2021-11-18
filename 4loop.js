//Return the last five numbers using for loop
//string.split()*/

var values = "1,2,3,4,5,6,7,8,9,10"

function fiveNumLoop(values) {
    for (var i = 0; values.length > 5; i++) {
      return values.split(',').filter((num) => {
      return num >  5
   }).join(',')
  }
}
var result = fiveNumLoop(values)
console.log(result)

// return: "6,7,8,9,10" (String)

//eller WHILE
// var values = "1,2,3,4,5,6,7,8,9,10"

// function fiveNumLoop(values) {
//     var i = 0
//     while (values.length > 5) {
//      i++
//       return values.split(',').filter((num) => {
//       return num >  5
//    }).join(',')
//   }
// }
// var result = fiveNumLoop(values)
// console.log(result)