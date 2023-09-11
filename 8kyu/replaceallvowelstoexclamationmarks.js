//Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
function replace(s){
  // g === all instances; i === case insensitive
  let regex = /[aeiou]/gi
  return s.replaceAll(regex, '!')
}