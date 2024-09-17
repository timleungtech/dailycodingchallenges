//Simple Fun #190: Folding Paper
function folding(a, b) {
  let res = 1
  let arr = [a, b]
  while (arr[0] !== arr[1]) {
    arr.sort((a, b) => b - a)
    arr = [arr[0] - arr[1], arr[1]]
    res++
  }
  return res
}