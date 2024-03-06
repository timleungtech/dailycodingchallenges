//Sum - Square Even, Root Odd
function rangeBitCount(a, b) {
  let arr = []
  
  //push all nums into arr
  for (let i = a; i <= b; i++){
    arr.push(i)
  }
  
  //convert int elements to binary
  let bin = arr.map(x => x.toString(2))
  
  //remove zeroes
  bin = bin.join('').split('0').join('')
  
  return bin.length
}