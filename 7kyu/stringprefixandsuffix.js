//String prefix and suffix
function solve(s){
  let wordLen = Math.floor(s.length/2)
  let first = s.slice(0, wordLen)
  let second = s.slice(-wordLen)
  for (let i = wordLen; i > 0; i--){
    if (first.slice(0, i) == second.slice(-i)){
      return i
    }
  }
  return 0
}