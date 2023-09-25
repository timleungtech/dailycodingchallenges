//Integers: Recreation One
function listSquared(m, n) {
  let result = []
  let divisors = []
  for (let i = m; i < n; i++) {
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        divisors.push(j)
        divisors.push(i / j)
      }
    }
    let squaredDivisors = [...new Set(divisors)].map(x => x ** 2)
    let sumOfSquares = squaredDivisors.reduce((a, c) => a + c, 0)
    if (Math.sqrt(sumOfSquares) % 1 === 0) {
      result.push([i, sumOfSquares])
    }
    divisors = []
  }
  return result
}