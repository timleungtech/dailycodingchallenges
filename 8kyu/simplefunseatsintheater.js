//Simple Fun #1: Seats in Theater
function seatsInTheater(nCols, nRows, col, row) {
  return (nCols - col + 1) * (nRows - row)
}