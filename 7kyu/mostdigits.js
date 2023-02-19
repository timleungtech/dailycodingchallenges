//Most digits
function findLongest(array){
  let arr = array.map(x => x.toString().length)
  arr.sort((a, b) => b - a)
  return array.find(x => x.toString().length == arr[0])
}