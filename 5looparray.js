
// Return the sum of all the numbers using for loop

//1.
var nums = [2,3,4,5,6,7,8,9]
var sum = 0

function sumLoop(nums) {
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    return sum.toString()
}
var added = sumLoop(nums)
console.log(added)


//2.
function sumLoop(nums) {
    var sum = 0
    for (const num of nums) {
        sum += num
    }
    return sum.toString()
}
var added = sumLoop(nums)
console.log(added)


//3.
nums.forEach(num => sum += num)
console.log(sum.toString())


//while loop
function whileLoop(nums) {
var i = 0, sum = 0
while(nums[i]) {
    sum += nums[i++]
    }
    return sum.toString()
}
console.log(whileLoop(nums))

// return: "44" (String)