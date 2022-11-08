//Playing with digits
function digPow(n, p) {
  let sum = 0
  let arr = n.toString().split('')
  for (let i = 0; i < arr.length; i++, p++) {
    sum += arr[i] ** p
  }
  return sum % n === 0 ? sum / n : -1
}