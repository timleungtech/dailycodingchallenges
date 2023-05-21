//Factorial
function factorial(n){
  let arr = []
  for(let i = 0; i < n; i++){
    arr.push(n-i)
  }
  return n === 0 ? 1 : arr.reduce((a,c) => a * c)
}