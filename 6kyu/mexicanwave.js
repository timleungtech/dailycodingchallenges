//Mexican Wave
function wave(str){
  let result = []
  let arr = str.toLowerCase().split('')
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] !== ' '){
      arr.splice(i, 1, arr[i].toUpperCase()).join('')
      let word = arr.join('')
      result.push(word)
      arr.splice(i, 1, arr[i].toLowerCase())
    }
  }
  return result
}