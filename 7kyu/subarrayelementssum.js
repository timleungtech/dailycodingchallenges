//Sub-array elements sum
function elementsSum(arr, d){
  if (!d) d = 0
  let result = 0
  let idx = arr.length - 1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][idx]) {
      result += arr[i][idx]
    } else if (arr[i][idx] === undefined){
      result += d
    }
    idx--
  }
  return result
}