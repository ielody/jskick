// Return the first five numbers using filter
//values: "1,2,3,4,5,6,7,8,9,10" (String)
function fiveNumFilter(values) {
  return values.split(',').filter((num) => {
    return num <= 5
  }).join(',')
}
var filtered = fiveNumFilter("1,2,3,4,5,6,7,8,9,10")
console.log(filtered)
// return: "1,2,3,4,5" (String)*/