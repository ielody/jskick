//Return HTML

var users = [{"name":"Bjørn","age":22},{"name":"Kit","age":55}]

function returnList(users) {
  return `<div class='list'>${users.map(user => {
    return `<span>${user['name']} (${user['age']})</span>`
  }).join('')}</div>`
}
console.log(returnList(users))
// return: "<div class='list'><span>Bjørn (22)</span><span>Kit (55)</span></div>" (String)
