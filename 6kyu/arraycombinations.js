//Array combinations
function solve(arr) {
  //remove duplicates by mapping each subarray into a new set
  //multiply lengths of all sets with size
  return arr.map(x => new Set(x)).reduce((a, c) => a * c.size, 1)
}