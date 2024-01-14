//Numbers with this digit inside
function numbersWithDigitInside(x, d) {
  let count = 1
  let arr = []

  while (count <= x) {
    if (count.toString().includes(d)) {
      arr.push(count)
    }
    count++
  }

  if (!arr.length) return [0, 0, 0]

  let sum = arr.reduce((a, c) => a + c, 0)
  let product = arr.reduce((a, c) => a * c, 1)

  return [arr.length, sum, product]
}