//Split In Parts
var splitInParts = function(s, partLength){
  let res = ''
  let idx = 0
  while (s.length > idx) {
    let extractedStr = s.slice(idx, idx + partLength)
    res += extractedStr + ' '
    idx += partLength
  }
  return res.slice(0, -1)
}