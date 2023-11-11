//You Got Change?
function giveChange(amount) {
  let array = [0,0,0,0,0,0]
  while (amount >= 100){
    amount -= 100
    array[5]++
  }
  while (amount >= 50){
    amount -= 50
    array[4]++
  }
  while (amount >= 20){
    amount -= 20
    array[3]++
  }
  while (amount >= 10){
    amount -= 10
    array[2]++
  }
  while (amount >= 5){
    amount -= 5
    array[1]++
  }
  while (amount >= 1){
    amount -= 1
    array[0]++
  }
  return array
}