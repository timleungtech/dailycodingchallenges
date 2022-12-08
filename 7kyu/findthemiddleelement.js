//Find the middle element
function gimme (triplet) {
  let arr = triplet.slice().sort((a, b) => a - b)
  return triplet.indexOf(arr[Math.floor(arr.length / 2)])
}