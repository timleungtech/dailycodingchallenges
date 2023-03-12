//Digitize
function digitize(n) {
  return n.toString().split('').map(x => Number(x))
}