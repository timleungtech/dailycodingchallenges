//Sum of the first nth term of Series
function SeriesSum(n){
  let sum = 0
  for (let i = 1; i <= n; i++){
    sum += 1/(3 * i - 2)
  }
  return sum.toFixed(2)
}