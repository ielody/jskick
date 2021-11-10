
// Return the sum of all the numbers using for loop

var nums = [2,3,4,5,6,7,8,9]

function sumLoop(nums) {
    var sum = 0
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    return sum.toString()
}
var added = sumLoop(nums)
console.log(added)

// return: "44" (String)