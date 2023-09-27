//Triple trouble
function tripledouble(num1, num2) {
  let repeat = []
  num1 = num1.toString().split('')
  num2 = num2.toString().split('')
  for (let i = 0; i < num1.length - 2; i++){
    if (num1[i] === num1[i+1] && num1[i] === num1[i+2]){
      repeat.push(num1[i])
    }
  }
  for (let j = 0; j < num2.length - 1; j++){
    for (let k = 0; k < repeat.length; k++){
      if (num2[j] === repeat[k] && num2[j] === num2[j+1]){
      return 1
      }
    }
  }
  return 0
}