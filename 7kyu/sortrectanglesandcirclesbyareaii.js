//Sort rectangles and circles by area II
function sortByArea(array) {
  let result = []
  for (let i = 0; i < array.length; i++){
    // if empty
    if (array.length === 0) return []
    // if square
    else if (array[i][1]) {
      let area = array[i][0] * array[i][1]
      result.push([i, area, array[i]])
    }
    // if circle
    else {
      let area = array[i]**2 * Math.PI
      result.push([i, area, array[i]])
    }
  }
  // sort asc by area and return element in original array
  return result.sort((a, b) => a[1] - b[1]).map(x => x[2])
}