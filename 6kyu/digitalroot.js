//Sum of Digits / Digital Root
function digital_root(n) {
  let arr = []
  arr = n.toString().split('').reduce((a, c) => a + Number(c), 0)
  if (arr.toString().length === 1){
    return arr
  }
  if (arr.toString().length > 1){
    return digital_root(arr)
  }
}