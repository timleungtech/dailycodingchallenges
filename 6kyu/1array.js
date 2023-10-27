//+1 Array
function upArray(arr){
  if (arr.filter(x => x < 0 || x > 9).length || arr.length === 0) { return null }
  arr[arr.length - 1]++
  for (let i = arr.length - 1; i > 0; i--){
    if (arr[i] > 9){
      arr[i] -= 10
      arr[i-1] += 1
    }
  }
  if (arr[0] > 9){
    arr[0] -= 10
    arr.unshift(1)
  }
  return arr
}