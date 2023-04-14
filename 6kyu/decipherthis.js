//Decipher this!
function decipherThis(str) {
  let arr = str.split(' ')
  let letters = []
  let result = []
  let first = []
  let second = ''
  let middle = ''
  let last = ''
  for(let i = 0; i < arr.length; i++){
    if (arr[i][0] === '1') {
      letters.push(arr[i].slice(3))
      first.push(String.fromCharCode(arr[i].slice(0,3)))
    } else {
      letters.push(arr[i].slice(2))
      first.push(String.fromCharCode(arr[i].slice(0,2)))
    }
    last = letters[i][0]
    if(letters[i].length > 1){
      second = letters[i][letters[i].length - 1]
      middle = letters[i].slice(1, -1)
    } else if (letters[i].length === 0){
      second = ''
      middle = ''
      last = ''
    } else {
      second = ''
      middle = ''
    }
    result.push(first[i] + second + middle + last)
  }
  return result.join(' ')
} 