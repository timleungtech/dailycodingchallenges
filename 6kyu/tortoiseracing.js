//Tortoise racing
function race(v1, v2, g) {
  let time = (g / (v2 - v1)) + 0.000001
  if (time <= 0) return null
  let hours = Math.floor(time)
  time -= hours
  let minutes = Math.floor(time * 60)
  time = time * 60 - minutes
  let seconds = Math.floor(time * 60)
  return [hours, minutes, seconds]
}