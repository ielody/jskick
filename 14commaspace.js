//Remove commas and extra space

// values: "hei,    på ,    deg" (String)
var string = "hei,    på ,    deg"
nystring = string.replaceAll(",    "," ")
console.log(nystring)


// return: "hei på deg" (String)