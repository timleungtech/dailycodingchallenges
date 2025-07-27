//Jenny the youngest detective
function missingWord(nums, str) {
  nums.sort((a, b) => a - b)
  let newStr = str.split(' ').map(x => x.toLowerCase()).join('')
  let result = ''
  
  for (let i = 0; i < nums.length; i++){
    if (!newStr[nums[i]]) return 'No mission today'
    result += newStr[nums[i]]
  }
  return result
}