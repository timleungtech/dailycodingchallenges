//Smoking Timmy
function startSmoking(bars, boxes){
  let start = (bars * 10 * 18) + (boxes * 18)
  let total = start
  while (start > 0.2){
    start /= 5
    total += start
  }
  return Math.floor(total)
}