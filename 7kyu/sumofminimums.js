//Sum of Minimums!
function sumOfMinimums(arr) {
  return arr.map(x => Math.min(...x)).reduce((a, c) => a + c)
}