//Perimeter of squares in a rectangle
function perimeter(n) {
  if (!n) return 4
  else {
    let sums = [1, 1]
    for (let i = 2; i <= n; i++) {
      sums.push(sums[sums.length - 1] + sums[sums.length - 2])
    }
    return sums.reduce((a, c) => a + c) * 4
  }
}