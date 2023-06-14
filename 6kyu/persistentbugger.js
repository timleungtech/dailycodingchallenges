//Persistent Bugger.
function persistence(num) {
  let i = 0
  while (num > 9){
    num = num.toString().split('').reduce((a, c) => a * +c, 1)
    i++
  }
  return i
}