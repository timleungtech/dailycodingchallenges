//pick a set of first elements
function first(arr, n = 1) {
    return arr.slice(0, n)
}

// function first(arr, n) {
//   if (n == 0) return []
//   else if (n == undefined) return arr.slice(0, 1)
//   else return arr.slice(0, n)
// }