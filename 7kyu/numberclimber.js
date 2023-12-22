//Number climber
function climb(n){
  let sequence = [n]
  while (n > 1){
    if (n % 2 === 1) {
      n = (n - 1) / 2
    } else {
      n = n / 2
    }
    sequence.unshift(n)
  }
  return sequence
}