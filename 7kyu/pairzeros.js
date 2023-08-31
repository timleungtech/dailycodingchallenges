//Pair Zeros
function pairZeros(arr) {
  let result = []
  let removeNext = false
  for (let i = 0; i < arr.length; i++) {
    if ( (arr[i] === 0 && !removeNext) || arr[i] !== 0 ){
      result.push(arr[i])
    }
    if (arr[i] === 0) {
      removeNext = !removeNext
    }
  }
  return result
}