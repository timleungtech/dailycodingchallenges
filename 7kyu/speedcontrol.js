//Speed Control
function gps(s, x) {
  if (x.length <= 1) return 0
  const arr = []
  for (let i = 1; i < x.length; i++){
    arr.push((3600 * (x[i] - x[i-1])) / s)
  }
  return Math.floor(Math.max(...arr))
}