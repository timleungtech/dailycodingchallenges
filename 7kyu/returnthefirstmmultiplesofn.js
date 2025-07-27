//Return the first M multiples of N
function multiples(m, n){
  let arr = []
  for (let i = 0; i < m; i++){
    arr.push(n * (i+1))
  }
  return arr
}