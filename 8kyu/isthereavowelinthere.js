//Is there a vowel in there?
function isVow(a){
  let b = []
  for(let i = 0; i < a.length; i++){
    if (a[i] == 97){
      b.push('a')
    } else if (a[i] == 101){
      b.push('e')
    } else if (a[i] == 105) {
      b.push('i')
    } else if (a[i] == 111) {
      b.push('o')
    } else if (a[i] == 117) {
      b.push('u')
    } else {
      b.push(a[i])
    }
  }
  return b
}