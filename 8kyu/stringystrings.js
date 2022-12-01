//Stringy Strings
function stringy(size) {
  let str = ''
  for (let i = 1; i <= size; i++){
    if (i % 2 == 1) {
      str = str + 1
    } else {
      str = str + 0
    }
  }
  return str
}