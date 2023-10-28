//Highest Rank Number in an Array
function highestRank(arr){
  // insert all elements in hash
  let hash = new Map()
  for (let i = 0; i < arr.length; i++) {
    if (hash.has(arr[i]))
      hash.set(arr[i], hash.get(arr[i]) + 1)
    else
      hash.set(arr[i], 1)
  }

  // find the max frequency
  let max_count = 0, res = -1
  hash.forEach((value, key) => {
    if (max_count < value) {
      res = key
      max_count = value
    }
    // return larger num if counts are equal
    if (max_count == value && key > res) {
      res = key
    }
  })
  return res
}