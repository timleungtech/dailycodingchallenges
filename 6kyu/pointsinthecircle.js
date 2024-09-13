//Points in the circle
function pointsNumber(r){
  let points = 0
  for (let x = -r; x <= r; x++){
    for (let y = -r; y <= r; y++){
      if (x**2 + y**2 <= r**2){
        points++
      }
    }
  }
  return points
}