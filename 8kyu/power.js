//Power
function numberToPower(number, power){
  console.info(Math.log2(1024));
  if (!power) return 1
  let result = number
  while (power > 1) {
    result *= number
    power--
  }
  return result
}