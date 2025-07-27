//Alternate case
function alternateCase(s) {
  s = s.split('')
  for (let i = 0; i < s.length; i++){
    if (s[i] == s[i].toUpperCase()){
      s[i] = s[i].toLowerCase()
    } else {
      s[i] = s[i].toUpperCase()
    }
  }
  return s.join('')
}