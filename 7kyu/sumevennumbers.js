//Sum even numbers
function sumEvenNumbers(input) {
  return input.filter(x => x % 2 === 0).reduce((a, c) => a + c, 0)
}