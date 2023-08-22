//Simple string characters
function solve(s){
  let upper = 0
  let lower = 0
  let nums = 0
  let special = 0
  
  s.split('').forEach((x, i) => {
    if (s.charCodeAt(i) > 64 && s.charCodeAt(i) < 91) {
      upper++
    } else if (s.charCodeAt(i) > 96 && s.charCodeAt(i) < 123) {
      lower++
    } else if (s.charCodeAt(i) > 47 && s.charCodeAt(i) < 58) {
      nums++
    } else {
      special++
    }
  })
  
  return [upper, lower, nums, special]
}