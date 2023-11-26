//Sum of array singles
function repeats(arr){
  let nums = []
    for(let i = 0; i < arr.length; i++){
      if (arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])){
        nums.push(arr[i])
      }
    }
    return nums.reduce((a, c) => a + c, 0)
  }