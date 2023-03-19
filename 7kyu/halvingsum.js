//function halvingSum(n) {
function halvingSum(n) {
  let sum = 0
  if (n === 1) return 1
  while (n >= 1) {
    sum += Math.floor(n)
    n /= 2
  }
  return sum
}