//IP Validation
function isValidIP(str) {
  const octets = str.split('.')
  return octets.length === 4 && octets.every(x => x >= 0 && x <= 255 && x === Number(x).toString())
}