//til camelCase

var string = "hello_we_are_all"
/*function camel() {
  return string.replaceAll(/(^|_)./g, s => s.slice(-1).toUpperCase()))
}
camel = console.log(string.replaceAll("_", " ").toUpperCase())*/

console.log(string.replace(/(^|_)./g, s => s.slice(-1).toUpperCase()))
//console.log(string.slice().replace("_", " ").toUpperCase())
//


//Skal bli : Hello We Are All