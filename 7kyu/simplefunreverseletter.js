//Simple Fun #176: Reverse Letter
function reverseLetter(str) {
  const regex = /[A-Za-z]/g
  return str.match(regex).reverse().join('')
}