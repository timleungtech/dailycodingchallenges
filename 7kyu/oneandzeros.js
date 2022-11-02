//Ones and Zeros
const binaryArrayToNumber = arr => {
  return parseInt(arr.join(''), 2)
}

const binaryArrayToNumber = arr => {
let sum = 0
let exp = 0
for (let i = arr.length - 1; i >= 0; i--){
  sum += 2**exp * arr[i]
  exp++
}
return sum
}