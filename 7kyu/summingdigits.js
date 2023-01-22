//Summing a number's digits
function sumDigits(number) {
  return Math.abs(number).toString().split('').reduce((a, c) => a + Number(c), 0)
}