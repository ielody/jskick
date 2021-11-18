//return five first numbers using splice
function getFiveNum(values) {
return values.split(',').splice(0,5).join(', ')
}
var result = getFiveNum("1,2,3,4,5,6,7,8,9,10")
console.log(result)



