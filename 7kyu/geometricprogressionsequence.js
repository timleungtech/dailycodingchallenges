//Geometric Progression Sequence
function geometricSequenceElements(a, r, n){
  let result = []
  result.push(a)
  for (let i = 1; i < n; i++){
    a *= r
    result.push(a)
  }
  return result.join(', ')
}