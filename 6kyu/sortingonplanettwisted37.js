//Sorting on planet Twisted-3-7
function sortTwisted37(array) {
  let arr = array.slice().toString().split('')
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '3') arr[i] = '7'
    else if (arr[i] == '7') arr[i] = '3'
  }
  
  arr = arr.join('').split(',').sort((a, b) => a - b).join(',').split('')
  
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] == '3') arr[j] = '7'
    else if (arr[j] == '7') arr[j] = '3'
  }
  
  arr = arr.join('').split(',').map(x => +x)
  
  return arr
}