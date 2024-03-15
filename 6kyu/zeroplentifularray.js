//Zero-plentiful Array
function zeroPlentiful(arr){
  
  // change all non-zeros to 1
  arr = arr.map(x => {
    if (x !== 0) return 1
    else return 0
  })
  
  // split by 1 and remove empty elements
  arr = arr.join('').split('1').filter(x => x.length > 0)
  
  // if any 0 sequence length is less than 4, return 0
  for(let i = 0; i < arr.length; i++){
    if (arr[i].length < 4) return 0
  }
  
  // else return number of >4 zeroes sequences
  return arr.length
}