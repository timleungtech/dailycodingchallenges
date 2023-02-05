//Disemvowel Trolls
function disemvowel(str) {
  return str.split('').filter(x => x !== 'a' && x !== 'e' && x !== 'i' && x !== 'o' && x !== 'u' && x !== 'A' && x !== 'E' && x !== 'I' && x !== 'O' && x !== 'U').join('')
}