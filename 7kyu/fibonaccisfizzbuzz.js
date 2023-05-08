//Fibonacci's FizzBuzz
var fibsFizzBuzz = function(n) {
  let num = 0
  let arr = []
  if (n > 0) arr.push(1)
  if (n > 1) arr.push(1)
  for (let i = 2; i < n; i++) {
    num = arr[i - 2] + arr[i - 1]
    arr.push(num)
  }
  let arr2 = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
      arr2.push('FizzBuzz')
    } else if (arr[i] % 3 === 0) {
      arr2.push('Fizz')
    } else if (arr[i] % 5 === 0) {
      arr2.push('Buzz')
    } else {
      arr2.push(arr[i])
    }
  }
  return arr2
}