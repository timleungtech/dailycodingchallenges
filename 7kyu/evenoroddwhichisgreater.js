//Even or Odd - Which is Greater?
function evenOrOdd(str) {
  let arr = str.split('').map(x => +x)
  let odd = 0
  let even = 0
  arr.forEach(x => {
    if (x % 2 == 0){
      even += x
    } else {
      odd += x
    }
  })
  if (even > odd) return 'Even is greater than Odd'
  if (even < odd) return 'Odd is greater than Even'
  if (even == odd) return 'Even and Odd are the same'
}