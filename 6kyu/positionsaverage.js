//Positions Average
function posAverage(s) {
  let arr = s.split(', ')
  let matches = 0
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = 0; k < arr[i].length; k++) {
        if (arr[i][k] == arr[j][k]) matches++
      }
    }
  }
  let comparisons = arr[0].length * (arr.length * (arr.length - 1))/2
  return (matches/comparisons * 100).toFixed(9)
}