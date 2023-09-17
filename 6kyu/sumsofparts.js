//Sums of Parts
function partsSums(ls) {
  let sum = ls.reduce((a, c) => a + c, 0)
  let result = [sum]
  for (let i = 0; i < ls.length; i++) {
    sum -= ls[i]
    result.push(sum)
  }
  return result
}