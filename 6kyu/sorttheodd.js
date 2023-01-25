//Sort the odd
function sortArray(array) {
  let odd = []
  let j = 0
  for (let i = 0; i < array.length; i++) {
    if (Math.abs(array[i]) % 2 == 1) {
      odd.push(array[i])
    }
    odd = odd.sort((a, b) => a - b)
  }
  for (let i = 0; i < array.length; i++) {
    if (Math.abs(array[i]) % 2 == 1) {
      array.splice(i, 1, odd[j])
      j++
    }
  }
  return array
}