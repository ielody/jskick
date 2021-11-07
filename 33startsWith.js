//Check if word has two !! from second position
function checkWord(word) {
  return word.startsWith('!!', 1)
}
console.log(checkWord('#!! Hello'))

//true