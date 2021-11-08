//convert "2019-12-25T07:04:54.275Z"
function convertDate(date) {

  const dateObject = new Date(date)
  var year = dateObject.getFullYear()
  var month = dateObject.getMonth()+1
  var day = dateObject.getDate()

  return [day,month,year].join('/')
  //return `${day}/${month}/${year}`
  //return day + '/' + month + '/' + year
}

var result = convertDate("2019-12-25T07:04:54.275Z")
console.log(result)

//"25/12/2019"