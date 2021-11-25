//Replace the underscores with spaces

var val = "hello_we_are_all"

function undersc(val) {
  return val.replaceAll('_', ' ')
}
console.log(undersc(val))
// return: "hello we are all" (String)