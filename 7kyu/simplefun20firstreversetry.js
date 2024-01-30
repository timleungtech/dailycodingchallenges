//Simple Fun #20: First Reverse Try
function firstReverseTry(arr) {
  if (!arr.length) return []
  if (arr.length === 1) return arr
  
  let result = arr.slice(1, -1)
  result.unshift(arr[arr.length - 1])
  result.push(arr[0])
  return result
}