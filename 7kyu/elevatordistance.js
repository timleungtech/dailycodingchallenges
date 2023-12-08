//Elevator Distance
function elevatorDistance(array) {
  let d = 0
  for(let i = 1; i < array.length; i++){
    d += Math.abs(array[i] - array[i-1])
  }
  return d
}