//Add Length
function addLength(str) {
  let arr = str.split(' ')
  let arr2 = []
  for (let i = 0; i < arr.length; i++){
    arr2.push(`${arr[i]} ${arr[i].length}`)
  }
  return arr2
}