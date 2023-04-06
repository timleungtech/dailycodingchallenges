//Multiplication table
multiplicationTable = function(size) {
  let arr = []
  for (let i = 1; i <= size; i++){
    let el = []
    for (let j = 1; j <= size; j++){
      el.push(i*j)
    }
    arr.push(el)
  }
  return arr
}