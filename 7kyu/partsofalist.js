//Parts of a list
function partlist(arr) {
  let a = []
  for (let i = arr.length - 1, j = 1; i > 0; i-- , j++) {
    a.push([arr.slice(0, arr.length - i).join(' '), (arr.slice(j, arr.length)).join(' ')])
  }
  return a
}