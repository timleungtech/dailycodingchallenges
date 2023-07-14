//Maximum Triplet Sum (Array Series #7)
function maxTriSum(numbers){
  let arr = []
  let max = 0
  while (arr.length < 3){
    max = Math.max(...numbers)
    arr.push(max)
    numbers = numbers.filter(x => x !== max)
  }
  return arr.reduce((a, c) => a + c)
}