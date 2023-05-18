//Product Array (Array Series #5)
function productArray(numbers){
  let result = []
  for (let i = 0; i < numbers.length; i++){
    result.push(numbers.reduce((a, c) => a * c)/numbers[i])
  }
  return result
}