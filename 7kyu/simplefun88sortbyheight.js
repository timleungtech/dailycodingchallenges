//Simple Fun #88: Sort By Height
function sortByHeight(a) {
  let res = []
  let b = a.filter(x => x > 0).sort((a, b) => a - b)
  for(let i = 0; i < a.length; i++){
    if (a[i] == -1) res.push(-1)
    else res.push(b.shift())
  }
  return res
}