//Is my friend cheating?
function removeNb (n) {
  //Gauss sums
  let sum = n*(n+1)/2

  let result = []
  for (let a = 1; a < n; a++) {
    let b = (sum - a) / (a + 1)
    if (b % 1 === 0 && b < n) {
      result.push([a, b])
    }
  }
  return result
}

function removeNb (n) {
  let arr = []
  for (let i = 1; i <= n; i++) {
    arr.push(i)
  }
  let sum = arr.reduce((a, c) => a + c)

  let result = []
  for (let a = 1; a < n; a++) {
    let b = (sum - a) / (a + 1)
    if (b % 1 === 0 && b < n) {
      result.push([a, b])
    }
  }
  return result
}