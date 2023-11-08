//How many consecutive numbers are needed?
function consecutive(arr) {
  return arr.length > 0 ? Math.max(...arr) - Math.min(...arr) - arr.length + 1 : 0
}