//Excel sheet column numbers
function titleToNumber(title) {
  //A-Z == 65-90
  let arr = title.split('').map(x => x.charCodeAt(0) - 64)
  let power = arr.length - 1
  for (let i = 0; i < arr.length; i++){
    arr[i] *= 26 ** power
    power--
  }
  return arr.reduce((a, c) => a + c)
}