//Substring fun
function nthChar(words){
  return words.reduce((a, c, i) => a + c[i], '')
}

// function nthChar(words){
//   let res = ''
//   words.forEach((x, i) => res += x[i])
//   return res
// }