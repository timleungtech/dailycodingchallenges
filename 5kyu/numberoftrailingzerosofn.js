//Number of trailing zeros of N!
function zeros (n) {
  // find kMax when kMax = log5n
  let kMax = 1
  while (n/(5**kMax) > 0){
    kMax++
  }
  
  // sum from k = 1 to k = kMax for n/(5**k)
  let result = 0
  for (let k = 1; k <= kMax; k++){
    result += Math.floor(n/5**k)
  }
  return result
}