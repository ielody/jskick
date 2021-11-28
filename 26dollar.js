//checks if word starts with $$$$

var string = "$$$$ 199 USD"

function findUsd(string) {
  return string.startsWith('$$$$')
}

console.log(findUsd(string))

//true