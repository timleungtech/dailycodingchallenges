//Multiply list by integer (with restrictions)
function multiply(n, l) {
  return l.map(x => Math.round(x/(1/n)))
}