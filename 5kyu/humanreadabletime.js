//Human Readable Time
function humanReadable (seconds) {
  let timeRemaining = seconds
  let hours = Math.floor(timeRemaining / 3600)
  if (hours < 10){
    hours = '0' + hours.toString()
  }
  timeRemaining -= hours * 3600
  let minutes = Math.floor(timeRemaining / 60)
  if (minutes < 10) {
    minutes = '0' + minutes.toString()
  }
  timeRemaining -= minutes * 60
  let secs = timeRemaining
  if (secs < 10) {
    secs = '0' + secs.toString()
  }
  return hours + ':' + minutes + ':' + secs
}