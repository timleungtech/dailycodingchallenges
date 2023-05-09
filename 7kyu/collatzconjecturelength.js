//Collatz Conjecture Length
function collatz(n){
  let arr = []
  for (let i = 0; n > 1; i++){
    if (n % 2 === 0){
      n = n / 2
    } else {
      n = n * 3 + 1
    }
    arr.push(n)
  }
  return arr.length + 1
}