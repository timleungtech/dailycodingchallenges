//Beginner Series #3 Sum of Numbers
function getSum(a, b){
  let sum = 0
  if (a < b) {
    while (a <= b) {
      sum += a
      a++
    }
    return sum
    } else if (b < a) {
        while (b <= a) {
          sum += b
          b++
        }
    return sum
    } else {
        return a
    }
}