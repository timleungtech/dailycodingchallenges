//Round up to the next multiple of 5
function roundToNext5(n) {
    while (n % 5 !== 0) {
      n++
    }
    return n
}