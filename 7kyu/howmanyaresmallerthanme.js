//How many are smaller than me?
function smaller(nums) {
  let arr = []
  let count = 0
  for(let i = 0; i < nums.length; i++) {
    count = 0
    for(let j = i + 1; j < nums.length; j++){
      if (nums[i] > nums[j]){
        count++
      }
    }
    arr.push(count)
  }
  return arr
}