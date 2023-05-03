//Smallest value of an array
function min(arr, toReturn) {
  let min = Math.min(...arr)
  return toReturn === 'value' ? min : arr.findIndex(x => x === min)
}