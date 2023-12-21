//Cut array into smaller parts
function makeParts(arr, chunkSize) {
  let res = []
  let subArr = []
  for(let i = 0; i < arr.length; i++){
    subArr.push(arr[i])
    if (subArr.length == chunkSize || i == arr.length - 1){
      res.push(subArr)
      subArr = []
    }
  }
  return res
}