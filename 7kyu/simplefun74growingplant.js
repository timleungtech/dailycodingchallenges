//Simple Fun #74: Growing Plant
function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let h = 0
  let d = 1
  while (h + upSpeed < desiredHeight){
    h += upSpeed - downSpeed
    d++
  }
  return d
}