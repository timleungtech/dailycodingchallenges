//The falling speed of petals
function sakuraFall(v) {
  //v = d / t
  const d = 5 * 80
  return v <= 0 ? 0 : d / v
}