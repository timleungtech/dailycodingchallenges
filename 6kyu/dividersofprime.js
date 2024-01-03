//Dividers of primes
function getDividers(values, powers) {
  let x = values.map((x, i) => x**powers[i]).reduce((a, c) => a * c, 1)
  let factors = []
  for(let k = 1; k <= x; k++){
    if(x % k == 0){
      factors.push(k)
    }
  }
  return factors.sort((a, b) => a - b)
}