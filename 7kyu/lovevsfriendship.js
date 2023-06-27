//Love vs friendship
function wordsToMarks(string){
  return string.split('').map((x, i) => string.charCodeAt(i) - 96).reduce((a, c) => a + c, 0)
}