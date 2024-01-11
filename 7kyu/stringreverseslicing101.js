//String reverse slicing 101
function reverseSlice(str) {
  let revStr = str.split('').reverse().join('')
  let res = []
  res.push(revStr)
  for (let i = 0; i < str.length - 1; i++){
    revStr = revStr.slice(1)
    res.push(revStr)
  }
  return res
}