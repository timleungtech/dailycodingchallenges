//Count up the points for the 7 Wonders board game! Easy version
function solve(compasses, gears, tablets) {
  const bonus = Math.min(compasses, gears, tablets) * 7
  const points = compasses**2 + gears**2 + tablets**2
  return points + bonus
}