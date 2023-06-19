//How many stairs will Suzuki climb in 20 years?
function stairsIn20(s){
  let total = 0
  for (let i = 0; i < s.length; i++){
    total += s[i].reduce((a, c) => a + c)
  }
  return total * 20
}