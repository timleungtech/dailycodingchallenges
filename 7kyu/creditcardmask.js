//Credit Card Mask
// return masked string
function maskify(cc) {
  return cc.slice(-4).padStart(cc.length, '#')
}