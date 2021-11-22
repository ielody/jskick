
//Return the object with the 'b' key deleted

var data = {"a":1,"b":2,"c":3}

function delObj(data) {
  delete data.b
  return data
}

console.log(delObj(data))

// return: {"a":1,"c":3} (Object)