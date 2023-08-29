//Sum Strings as Numbers
function sumStrings(a,b) { 
  return (BigInt(a) + BigInt(b)).toString()
}

function sumStrings(a,b) {
  a = a.split('')
  b = b.split('')

  let carry = 0
  let added = []
  let prefix = ''

  let temp = []
  if (a.length < b.length) {
    temp = a
    a = b
    b = temp
  }

  for (let i = b.length; i > 0; i--) {
    let n1 = +a.pop()
    let n2 = +b.pop()
    let sum = n1 + n2

    if (carry) {
      sum++
      carry--
    }

    if (sum > 9) {
      carry++
      sum -= 10
    }
    added.unshift(sum.toString())
  }

  if (carry){
    prefix = (+a.join('') + 1).toString()
  } else {
    prefix = a.join('')
  }

  let result = (prefix + added.join('')).split('')

  while (result[0] === '0') {
    result.shift()
  }

  return result.join('')
}