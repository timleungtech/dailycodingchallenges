//Flatten and sort an array
function flattenAndSort(array) {
  if (array.length === 0) return []
  let arr = array[0]
  for (let i = 0; i < array.length - 1; i++){
    arr = arr.concat(array[i + 1])
  }
  arr.sort((a, b) => a - b)
  return arr;
}