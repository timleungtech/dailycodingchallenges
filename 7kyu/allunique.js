//All unique
function hasUniqueChars(str){
  let arr = str.split('')
  let uniqueChars = [...new Set(arr)]
  return arr.length === uniqueChars.length
}