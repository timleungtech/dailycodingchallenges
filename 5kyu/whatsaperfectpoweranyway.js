//What's a Perfect Power anyway?
var isPP = function(n){
  // m ^ k = n
  // m = n ^ (1 / k)
  for (let m = 2; m <= n ** 0.5 ; m++){
    let k = 2
    while(m**k <= n){
      if (m**k == n) {
        return [Math.round(n**(1/k)), k]
      }
      k++
    }
  }
  return null
}