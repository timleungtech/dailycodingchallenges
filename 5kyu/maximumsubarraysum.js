//Maximum subarray sum
var maxSequence = function(arr){
  if (arr.every(x => x < 0)) return 0
  else {
    let currentSum = 0
    let maxSum = -Infinity
    for(let i = 0; i < arr.length; i++){ 
        currentSum = Math.max(arr[i], currentSum + arr[i])
        maxSum = Math.max(currentSum, maxSum)
    }
    return maxSum
  }
}