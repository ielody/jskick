
//Return the sum of all the numbers using for loop

var i, sum = 0, nums = [2,3,4,5,6,7,8,9]

for (i = 0; i < nums.length; i++) {
    sum += +nums[i]
}
console.log(sum.toString())

// return: "44" (String)
