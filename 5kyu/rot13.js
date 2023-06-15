//Rot13
function rot13(message){
  let arr = message.split('')
  let result = []
  for (let i = 0; i < arr.length; i++){
    let x = arr[i].charCodeAt(0)
    if (x >= 65 && x <= 77){
        result.push(String.fromCharCode(x + 13))
    } else if (x >= 78 && x <= 90){
        result.push(String.fromCharCode(x - 13))
    } else if (x >= 97 && x <= 109){
        result.push(String.fromCharCode(x + 13))
    } else if (x >= 110 && x <= 122){
        result.push(String.fromCharCode(x - 13))
    } else {
        result.push(arr[i])
    }
  }
  return result.join('')
}