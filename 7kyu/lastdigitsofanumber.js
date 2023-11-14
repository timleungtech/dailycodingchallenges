//last digits of a number
function lastDigit(n, d) {
  return d > 0 ? n.toString().split('').map(x => +x).slice(-d) : []
}