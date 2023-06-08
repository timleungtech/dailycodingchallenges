//Duplicate Encoder
function duplicateEncode(word){
  return word.toLowerCase().split('').map((x,i,a) => a.indexOf(x) === a.lastIndexOf(x) ? '(' : ')').join('')
}

function duplicateEncode(word){
  word = word.toLowerCase()
  const chars = word.toLowerCase().split('')
  let result = ''

  const charCount = chars.reduce(function (obj, item) {
    if (!obj[item]) {
      obj[item] = 0
    }
    obj[item]++
    return obj
  }, {})

  for (let i = 0; i < word.length; i++){
    if (charCount[chars[i]] > 1){
      result += ')'
    } else {
      result += '('
    }
  }
  
  return result
}