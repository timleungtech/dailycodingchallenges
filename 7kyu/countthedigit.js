//Count the Digit
function nbDig(n, d) {
  let arr = []
  for (let i = 0; i <= n; i++) {
    arr.push(i ** 2)
  }
  arr = arr.map(x => x.toString()).join('').split(d)
  return arr.length - 1
}