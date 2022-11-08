//Find the next perfect square!
function findNextSquare(sq) {
  return sq**.5 % 1 === 0 ? (sq**.5 + 1)**2 : -1
}