//More Zeros than Ones
function moreZeros(s){
  let bin_arr = s.split('').map(c => c.charCodeAt(0).toString(2))
  let charCodes = bin_arr.filter(s => s.split('0').length > s.split('1').length).map(s => String.fromCharCode(parseInt(s, 2)))
  let unique = [...new Set(charCodes)]
  return unique
}

function moreZeros(s){
  // get binary array
  let bin_arr = s.split('').map(x => x.charCodeAt(0).toString(2))
  let result = []
  
  // count zeros and ones for each subarray
  for (let i = 0; i < s.length; i++) {
    bin_arr[i].split('')
    let zeros = 0
    let ones = 0
    for (let j = 0; j < bin_arr[i].length; j++){
      if (bin_arr[i][j] == '0'){
        zeros = zeros + 1
      } else {
        ones = ones + 1
      }
    }
    
    // if more zeros than ones, push original char element to result
    if (zeros > ones){
      result.push(String.fromCharCode(parseInt(bin_arr[i], 2)))
    }
  }
  
  // remove duplicates
  return [...new Set(result)]
}