//Correct the mistakes of the character recognition software
function correct(string){
  return string.split('0').join('O').split('5').join('S').split('1').join('I')
}