//Two Sum
function twoSum(numbers, target) {
  let k = 1
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = k; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] == target) {
        return [i, j]
      }
    }
    k++
  }
}