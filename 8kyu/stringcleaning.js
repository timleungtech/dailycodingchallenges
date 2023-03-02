//String cleaning
function stringClean(s) {
  return s.split('').filter(x => (x !== '0') && (x !== '1') && (x !== '2') && (x !== '3') && (x !== '4') && (x !== '5') && (x !== '6') && (x !== '7') && (x !== '8') && (x !== '9')).join('')
}