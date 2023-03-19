//Sort an array by value and index
function sortByValueAndIndex(array){
  array = array.map((x, i) => [x, x * (i + 1)]).sort((a, b) => a[1] - b[1])
  return array.map(x => x[0])
}