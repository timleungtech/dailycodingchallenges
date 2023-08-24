//zipWith
function zipWith(fn,a0,a1) {
  let result = []
  for (let i = 0; i < Math.min(a0.length, a1.length); i++){
    result.push( fn(a0[i], a1[i]) )
  }
  return result
}