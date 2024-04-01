//Count the divisible numbers
function divisibleCount(x, y, k) {
  return Math.floor(y/k) - Math.ceil(x/k) + 1
}