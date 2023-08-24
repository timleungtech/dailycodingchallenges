//Largest Elements
function largest(n, array) {
  array.sort((a, b) => b - a)
  let result = []
  while (n > 0){
    let e = array.shift()
    result.unshift(e)
    n--
  }
  return result
}