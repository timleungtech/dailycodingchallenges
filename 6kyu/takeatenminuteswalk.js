//Take a Ten Minutes Walk
function isValidWalk(walk) {
  let n = walk.filter(x => x === 'n').length
  let s = walk.filter(x => x === 's').length
  let e = walk.filter(x => x === 'e').length
  let w = walk.filter(x => x === 'w').length
  let blocks = n + s + e + w
  return n == s && e == w && blocks == 10
}