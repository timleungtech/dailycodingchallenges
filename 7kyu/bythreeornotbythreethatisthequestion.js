//By 3, or not by 3? That is the question . . .
function divisibleByThree(str){
  return str.split('').map(x => +x).reduce((a, c) => a + c, 0) % 3 == 0
}