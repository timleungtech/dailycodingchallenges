//Delete occurrences of an element if it occurs more than n times
function deleteNth(arr,n){
  let result = []
  let counter = arr.reduce((obj, item, index) => {
    if (!obj[item]) {
      obj[item] = 0
    }
    if (obj[item] < n) {
      obj[item]++
      result.push(arr[index])
    }
    return obj
  }, {})
  return result
}