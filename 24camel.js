//til camelCase

var str = "hello_we_are_all"

function camel(text) {
  return str.toLowerCase()
    .split('_')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ')
}
console.log(camel(str))

//return: Hello We Are All