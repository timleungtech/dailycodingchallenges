//Contamination #1 -String-
function contamination(text, char){
  return text.length === 0 || char.length === 0 ? '' : char.repeat(text.length)
}