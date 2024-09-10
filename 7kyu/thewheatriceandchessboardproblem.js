//The wheat/rice and chessboard problem
function squaresNeeded(grains){
  return grains == 0 ? 0 : grains.toString(2).length
}