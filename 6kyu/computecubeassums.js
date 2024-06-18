//compute cube as sums
function findSummands(n){
  let arr = []
  for (let i = -n + 1; i < n; i += 2){
    arr.push(n**2 + i)
  }
  return arr
}