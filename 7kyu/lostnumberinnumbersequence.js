//Lost number in number sequence
function findDeletedNumber(arr, mixArr) {
  //return 0 on empty arrays
  if (arr.length === 0) return 0
  
  //gauss sum - constant time for adding contiguous int array starting with 1
  let lastNum = arr[arr.length - 1]
  let totalSum =  lastNum * (lastNum + 1) / 2
  
  //sum of mixed array
  let totalMixedSum = mixArr.reduce((a, c) => a + c, 0)
  
  //return 0 if no num is deleted, else return difference
  return totalSum === totalMixedSum ? 0 : totalSum - totalMixedSum
}