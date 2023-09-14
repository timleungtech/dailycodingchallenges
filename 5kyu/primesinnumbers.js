//Primes in numbers
function primeFactors(n){
  let arr = []
  let result = ''
  for (let i = 2; i <= n; i++){
    while (n % i === 0){
      arr.push(i)
      n /= i
    }
    if (arr.length === 1){
      result += `(${i})`
    } else if (arr.length > 1){
      result += `(${i}**${arr.length})`
    }
    arr = []
  }
  return result
}