//Balanced Number (Special Numbers Series #1 )
function balancedNum(number){
  if (number < 100) return 'Balanced'
  number = number.toString()
  let left = '', right = ''
  if (number.length % 2 == 0){
    left = number.slice(0, number.length/2 - 1)
    right = number.slice(number.length/2 + 1)
  } else {
    left = number.slice(0, Math.floor(number.length/2))
    right = number.slice(Math.ceil(number.length/2))
  }
  return left.split('').reduce((a, c) => a + +c, 0) == right.split('').reduce((a, c) => a + +c, 0) ? 'Balanced' : 'Not Balanced'
}