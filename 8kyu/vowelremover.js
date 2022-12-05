//Vowel remover
function shortcut (string) {
  return string.split('').filter(x => x != 'a' && x !== 'e' && x != 'i' && x != 'o' && x != 'u').join('')
}