//Fix string case
function solve(s){
  let arr = []
  let uppercaseCount = 0
  let lowercaseCount = 0
  arr = s.split('').forEach(x => {
    if(x === x.toLowerCase()){
      lowercaseCount++
    } else {
      uppercaseCount++
    }
  })
  return lowercaseCount >= uppercaseCount ? s.toLowerCase() : s.toUpperCase()
}