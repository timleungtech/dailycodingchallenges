//calculate average
function find_average(array) {
    if (array.length < 1) {
      return 0
    } else {
      let avg = array.reduce((a,b) => (a + b)) / array.length
      return avg
    }
}