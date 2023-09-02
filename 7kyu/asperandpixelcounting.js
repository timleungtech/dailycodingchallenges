//Asperand pixel counting
function countPixels(k) {
  return k > 1 ? 8 * k + 2 : 11
}

function countPixels(k) {
  return k > 2 ? 8 * k + 2 : (k === 1) ? 11 : 18
}