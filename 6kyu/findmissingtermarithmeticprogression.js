//Find the missing term in an Arithmetic Progression
var findMissing = function (list) {  
  list.sort((a, b) => a - b)
  for (let i = 1; i < list.length; i++) {
    let lower = list[i] - list[i - 1]
    let upper = list[i + 1] - list[i]
    if (lower < upper) {
      return list[i] + lower
    }
    if (lower > upper) {
      return list[i] - upper
    }
  }
}