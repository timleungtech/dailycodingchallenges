//First non-repeating character
function firstNonRepeatingLetter(s) {
  let t = s.toLowerCase()
  for (let i = 0; i < t.length; i++){
    if(t.indexOf(t[i]) === t.lastIndexOf(t[i])){
      return s[i]  
    }
  }
  return ""
}

function firstNonRepeatingLetter(s) {
  let unique_arr = s.toLowerCase().split('')
  let char_count = unique_arr.reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 0
    }
    obj[item]++
    return obj
  }, {})

  let unique_char_obj = Object.entries(char_count).filter(([key, value]) => value === 1)
  if (s.length == 0 || unique_char_obj.length == 0) return ''
  
  let unique_chars = unique_char_obj.map(x => x[0])
  let index = s.split('').findIndex(x => x.toLowerCase() == unique_chars[0])
  return s[index]
}