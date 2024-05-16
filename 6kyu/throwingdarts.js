//Throwing Darts
function scoreThrows(radii){
  if (radii.length == 0) return 0
  let sum = 0
  for (let i = 0; i < radii.length; i++){
    if (radii[i] >= 5 && radii[i] <= 10){
      sum += 5
    } else if (radii[i] < 5){
      sum += 10
    }
  }
  if (radii.filter(x => x < 5).length == radii.length){
    sum += 100
  }
  return sum
}