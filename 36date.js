//convert date: "2019-12-25T07:04:54.275Z" (String)

function conDate(date) {

  const dateObject = new Date(date)
  var year = dateObject.getFullYear().toString().substr(-2)
  var month = dateObject.getMonth()+1
  var day = dateObject.getDate()
  var hours = dateObject.getUTCHours()
  var minutes = dateObject.getUTCMinutes()

  return `0${hours}:0${minutes} ${day}/${month}/${year}`
}

var result = conDate("2019-12-25T07:04:54.275Z")
console.log(result)

// return: "07:04 25/12/19" (String)