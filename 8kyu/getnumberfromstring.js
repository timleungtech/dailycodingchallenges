//Get number from string
function getNumberFromString(s) {
  return +s.match(/[0-9]/g).join('')
}