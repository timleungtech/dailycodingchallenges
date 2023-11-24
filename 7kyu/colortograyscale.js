//Color to Grayscale
function rgbToGrayscale(color){ 
  let R = parseInt(color.slice(1,3), 16)
  let G = parseInt(color.slice(3,5), 16)
  let B = parseInt(color.slice(5,7), 16)
  let Y = Math.round(0.299 * R + 0.587 * G + 0.114 * B)
  return '#' + Y.toString(16).padStart(2, '0').repeat(3)
}