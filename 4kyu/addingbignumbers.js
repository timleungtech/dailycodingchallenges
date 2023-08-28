//Adding Big Numbers
function add(a, b) {
  a = a.split('')
  b = b.split('')
  
  let temp = []
  if (a.length < b.length){
    temp = a
    a = b
    b = temp
  }

  let result = []
  let carry = 0
  let num1 = 0
  let num2 = 0
  let lengthDiff = a.length - b.length
  let prefix = ''

  for (let i = Math.min(a.length, b.length) - 1; i >= 0; i--) {
    num1 = +a.pop()
    num2 = +b.pop()
    let sum = num1 + num2
    
    if (carry > 0) {
      sum++
      carry--
    }

    if (sum >= 10) {
      result.unshift((sum - 10).toString())
      carry++
    } else {
      result.unshift(sum).toString()
    }
  }

  if (carry > 0) {
    prefix = (+(a.slice(0, lengthDiff).join('')) + 1).toString()
  } else {
    prefix = a.slice(0, lengthDiff).join('')
  }
  return prefix + result.join('')
}