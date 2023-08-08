//Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!
function sumDigPow(a, b) {
  let result = []
  for (let i = a; i <= b; i++){
    if (i === i.toString().split('').reduce((a, c, i) => a + Number(c) ** (i + 1), 0)){
      result.push(i)
    }
  }
  return result
}