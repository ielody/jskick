//remove names that starts with a

function getNames(names) {

  return names.split(',').filter((name) => {

  return !name.startsWith('a')

}).join(',')
}
var result = getNames("anne,nils,guri,anders,martin")
console.log(result)