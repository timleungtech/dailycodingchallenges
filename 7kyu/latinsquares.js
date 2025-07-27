//Latin Squares
function makeLatinSquare(n) {
  let arr = []
  for (let i = 0; i < n; i++) {
    let row = []
    for (let j = n-i; j > 0; j--) {
      row.push(j)
    }
    if (row.length !== n){
      for (let j = n; j > n-i; j--) {
        row.push(j)
      }
    }
    arr.push(row)
  }
  return arr
}