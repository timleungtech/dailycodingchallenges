//Min Factor Distance
function minDistance(n){
  let factors = []
  for (let i = 0; i <= n; i++){
    if (n % i === 0){
      factors.push(i)
    }
  }
  let diff = []
  for (let i = 1; i < factors.length; i++){
    diff.push(factors[i] - factors[i - 1])
  }
  return Math.min(...diff)
}