//Greatest common divisor
function mygcd(x,y){
  let smaller = Math.min(x, y)
  let larger = Math.max(x, y)
  for (let i = smaller; i > 0; i--) {
    if (smaller % i === 0 && larger % i === 0) {
      return i
    }
  }
  return 1
}