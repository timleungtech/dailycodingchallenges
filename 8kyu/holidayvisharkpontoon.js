//Holiday VI - Shark Pontoon
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  if (dolphin) {
    sharkSpeed = sharkSpeed / 2
  }
  let youTime = pontoonDistance / youSpeed
  let sharkTime = sharkDistance / sharkSpeed
  return youTime < sharkTime ? "Alive!" : "Shark Bait!"
}