//Simple Fun #40: Timed Reading
function timedReading(maxLength, text) {
  return text.replace(/[^A-Za-z]/g, ' ').split(' ').filter(x => x && x.length <= maxLength).length
}