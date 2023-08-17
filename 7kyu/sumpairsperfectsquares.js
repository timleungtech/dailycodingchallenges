//The Sum and The Rest of Certain Pairs of Numbers have to be Perfect Squares
function closestPairTonum(n) {
  for (let i = n - 1; i > 0; i--) {
    for (let j = i - 1; j > 0; j--) {
      if (Math.sqrt(i + j) % 1 === 0 && Math.sqrt(i - j) % 1 === 0) {
        return [i, j]
      }
    }
  }
}