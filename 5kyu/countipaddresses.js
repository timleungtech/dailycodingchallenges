//Count IP Addresses
function ipsBetween(start, end){
  start = start.split('.').map(x => +x)
  end = end.split('.').map(x => +x)
  let result = 0
  for (let i = 3; i >= 0; i--){
    result += (256 ** (3 - i)) * (end[i] - start[i])
  }
  return result
}