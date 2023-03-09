//Palindrome chain length
var palindromeChainLength = function (n) {
  let i = 0
  let sum = n + Number(n.toString().split('').reverse().join(''))
  if (n === Number(n.toString().split('').reverse().join(''))) return i
  else {i++}
  while (sum !== Number(sum.toString().split('').reverse().join(''))) {
    sum = sum + Number(sum.toString().split('').reverse().join(''))
    i++
  }
  return i
};