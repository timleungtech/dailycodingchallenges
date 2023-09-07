//Weight for weight
function orderWeight(strng) {
  let arr = strng.split(' ')
  let sums = arr.map(x => [x, x.split('').reduce((a, c) => a + +c, 0)])

  //sort alphabetically by string
  sums.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1;
    }
    if (a[0] > b[0]) {
      return 1;
    }
    return 0;
  })

  //sort by sum of digits value
  sums.sort((a, b) => a[1] - b[1])

  let sortedString = sums.map(x => x[0]).join(' ')
  
  return sortedString
}