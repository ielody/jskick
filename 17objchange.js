
//Return the object with the 'b' key deleted

var data = {"a":1,"b":2,"c":3}

function changeObj(data) {
  data.b = 4
  return data
}

console.log(changeObj(data))

// return: {"a":1,"b":4,"c":3} (Object)