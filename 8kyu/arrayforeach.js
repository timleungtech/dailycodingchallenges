//Total amount of points
function points(games) {
    let sum = 0
    games.forEach(x => {
      x[0] > x[2] ? sum += 3 :
      x[0] < x[2] ? sum += 0 :
      sum += 1
    })
    return sum
}