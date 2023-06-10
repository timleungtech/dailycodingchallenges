//String transformer
function stringTransformer(str) {
  //split to array of chars
  str = str.split('')
  //loop through array of chars and change casing on each char
  let arr = str.map(x => x === x.toLowerCase() ? x.toUpperCase() : x.toLowerCase()).join('')
  //loop through array of words and reverse order
  let res = arr.split(' ').reverse().join(' ')
  //return result
  return res
}