//Twice linear
function dblLinear(n) {
  let rows = 0
  while (n >= 2 ** rows) {
    rows++
  }
  let result = [1]
  let prevRow = [1]
  let currRow = []
  for (let i = 0; i <= rows + 1; i++) {
    prevRow.forEach(x => {
      currRow.push(x * 2 + 1)
      currRow.push(x * 3 + 1)
    })
    result = result.concat(currRow)
    prevRow = currRow
    currRow = []
  }
  result = [...new Set(result)]
  result.sort((a, b) => a - b)
  return result[n]
}