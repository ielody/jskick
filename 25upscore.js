//Convert to uppercase and underscores

var string = "The source is in balance"

function upScore(string) {
  return string.toUpperCase().replaceAll(' ', "_")
}

console.log(upScore(string))
//THE_SOURCE_IS_IN_BALANCE