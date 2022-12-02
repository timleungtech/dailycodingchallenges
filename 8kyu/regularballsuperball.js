//Regular Ball Super Ball
var Ball = function(ballType) {
  if (ballType !== undefined){
    this.ballType = ballType
  } else {
    this.ballType = 'regular'  
  }
}