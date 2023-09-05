//RGB To Hex Conversion
function rgb(r, g, b){
  if (r < 0) r = 0
  if (g < 0) g = 0
  if (b < 0) b = 0
  if (r > 255) r = 255
  if (g > 255) g = 255
  if (b > 255) b = 255
  r = r.toString(16)
  g = g.toString(16)
  b = b.toString(16)
  if (r.length === 1) r = '0' + r
  if (g.length === 1) g = '0' + g
  if (b.length === 1) b = '0' + b
  return (r + g + b).toUpperCase()
}