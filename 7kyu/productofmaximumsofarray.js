//Product Of Maximums Of Array (Array Series #2)
function maxProduct(numbers, size){
  let sorted = numbers.sort((a, b) => a - b)
  let arr = sorted.slice(-size)
  return arr.reduce((a, c) => a * c)
}