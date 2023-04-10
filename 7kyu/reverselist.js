//Reverse list
function reverseList(arr) {
  return arr.reverse()
}

function reverseList(arr) {
  let reversed = []
  for (let i = 0; i < arr.length; i++){
    reversed.unshift(arr[i])
  }
  return reversed
}