//WeIrD StRiNg CaSe
function toWeirdCase(string){
  let result = ''
  let arr = string.split(' ')
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr[i].length; j++){
      if (j % 2 == 0){
        result += arr[i][j].toUpperCase()
      } else {
        result += arr[i][j].toLowerCase()
      }
    }
    if (i < arr.length - 1){
      result += ' '  
    }
  }
  return result
}