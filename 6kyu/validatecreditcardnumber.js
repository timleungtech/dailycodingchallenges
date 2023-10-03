//Validate Credit Card Number
function validate(n){
  let arr = n.toString().split('').map(x => +x)
  
  // multiply by 2 every odd index starting from right
  if (arr.length % 2 === 0){
    for (let i = 0; i < arr.length; i += 2){
      arr[i] *= 2
    }
  }
  if (arr.length % 2 === 1) {
    for (let i = 1; i < arr.length; i += 2) {
      arr[i] *= 2
    }
  }

  // if element is bigger than 9, sum it's digits OR subtract 9
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 9){
      arr[i] -= 9
    }
  }
  
  // if sum of all elements mod 10 === 0, then credit card is valid
  return arr.reduce((a, c) => a + c) % 10 === 0
}