//Return HTML

var users = [{"name":"Vidar","position":"Master"},{"name":"Suong","position":"Student"}]

function returnHtml(users) {
  return `<ul>${users.map(user => {
    return `<li>${user['name']}: ${user['position']}</li>`
  }).join('')
}</ul>`
}
console.log(returnHtml(users))

//return: "<ul><li>Vidar: Master</li><li>Suong: Student</li></ul>" (String)
