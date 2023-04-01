//Equal Sides Of An Array
function findEvenIndex(arr){
  if (arr.reduce((a, c) => a + c) - arr[0] === 0) return 0
  else if (arr.reduce((a, c) => a + c) - arr[arr.length - 1] === 0) return arr.length - 1
  else {
    let arr1 = 0, arr2
    for (let i = 1, j = 2; i < arr.length - 1; i++, j++) {
      arr1 += arr[i - 1]
      arr2 = arr.slice(-(arr.length - j)).reduce((a, c) => a + c, 0)
      if (arr1 === arr2) return i
    }
    return -1
  }
}