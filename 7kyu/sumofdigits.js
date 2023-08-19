//Debug Sum of Digits of a Number
function getSumOfDigits(integer) {
  return integer.toString().split('').reduce((a, c) => a + +c, 0)
}