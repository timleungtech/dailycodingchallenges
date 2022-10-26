//Exes and Ohs
function XO(str) {
    let xCount = 0
    let oCount = 0
    let arr = str.toLowerCase().split('')
    for (let i = 0; i < arr.length; i++){
      if (arr[i] == 'x'){
        xCount = xCount + 1
      } else if (arr[i] == 'o'){
        oCount = oCount + 1
      }
    }
    return xCount == oCount
}