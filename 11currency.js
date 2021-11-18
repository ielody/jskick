
//Return numbers with currency

var values = "1,2,3,4,5,6,7,8,9,10"

function currency(values) {
  return values.split(',').map(n => '$' + n).join(',')
}
console.log(currency(values))

// return: "$1,$2,$3,$4,$5,$6,$7,$8,$9,$10" (String)