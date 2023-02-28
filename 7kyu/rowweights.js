//Row Weights
function rowWeights(array){
  let weight = [0, 0]
  array.forEach((x, i) => {
    if (i % 2 === 0){
      weight[0] += x
    } else {
      weight[1] += x
    }
  })
  return weight
}