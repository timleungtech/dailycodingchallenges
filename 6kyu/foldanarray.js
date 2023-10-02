//Fold an array
function foldArray(array, runs){
  let arr = array
  for (let i = 0; i < runs; i++) {
    let result = []
    for (let j = 0; j < Math.floor(arr.length / 2); j++) {
      result.push(arr[j] + arr[arr.length - 1 - j])
    }
    if (arr.length % 2 === 1) { result.push(arr[Math.floor(arr.length / 2)]) }
    arr = result
  }
  return arr
}