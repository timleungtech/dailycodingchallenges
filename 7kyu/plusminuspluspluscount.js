//Plus - minus - plus - plus - ... - Count
function catchSignChange(arr) {
  arr = arr.map(x => {
    if (x < 0) {
      return 0
    } else {
      return 1
    }
  })
  
  let count = 0
  
  for (let i = 1; i < arr.length; i++){
    if (arr[i] !== arr[i-1]) count++
  }
  
  return count
}