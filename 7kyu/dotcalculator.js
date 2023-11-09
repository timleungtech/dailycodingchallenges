//Dot Calculator
function dotCalculator (equation) {
  let arr = equation.split(' ')
  let n1 = arr[0].length
  let operation = arr[1]
  let n2 = arr[2].length
  let result = 0
  
  if (operation === '+'){ result = n1 + n2 }
  if (operation === '-'){ result = n1 - n2 }
  if (operation === '*'){ result = n1 * n2 }
  if (operation === '//'){ result = n1 / n2 }
  
  return '.'.repeat(result)
}