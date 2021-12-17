//Return HTML with converted date

var data = {"game":"Antilogic","date":"2019-12-25T07:04:54.275Z"}

function convertDate(date) {
  const dateObject = new Date(date)
  var year = dateObject.getFullYear().toString().substr(-2)
  var month = dateObject.getMonth()+1
  var day = dateObject.getDate()
  return [day,month,year].join('/')
}

function returnHtml(data) {
  return `<div id='logic' style='color: blue'>
  ${data['game']} ${convertDate(data.date)}
  </div>`
}
  console.log(returnHtml(data))

// return: "<div id='logic' style='color: blue'>Antilogic 25/12/19</div>" (String)


