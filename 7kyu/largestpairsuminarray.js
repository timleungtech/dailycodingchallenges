//Largest pair sum in array
function largestPairSum (numbers) {
  numbers = numbers.sort((a, b) => a - b)
  let left = numbers[0] + numbers[1]
  let right = numbers[numbers.length - 1] + numbers[numbers.length - 2]
  return left > right ? left : right
}