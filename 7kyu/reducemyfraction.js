//Reduce My Fraction
function reduce(fraction) {
  let i = 2
  while (i <= fraction[0]) {
    if (fraction[0] % i == 0 && fraction[1] % i == 0) {
      fraction[0] /= i
      fraction[1] /= i
      i = 1
    }
    i++
  }
  return fraction
}