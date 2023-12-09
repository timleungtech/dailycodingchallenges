//Simple Fun #2: Circle of Numbers
function circleOfNumbers(n, firstNumber) {
  return n/2 <= firstNumber ? firstNumber - n/2 : n/2 + firstNumber
}