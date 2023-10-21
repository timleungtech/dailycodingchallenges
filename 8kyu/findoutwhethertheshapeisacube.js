//Find out whether the shape is a cube
var cubeChecker = function(volume, side){
  return side**3 === volume && side > 0
};