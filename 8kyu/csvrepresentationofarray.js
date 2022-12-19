//CSV representation of array
function toCsvText(array) {
  let str1 = ''
  let str2 = ''
  for (let i = 0; i < array.length; i++){
    str1 = array[i].reduce((a, c) => a + ',' + c.toString())
    str2 = str2 + str1 + '\n'
  }
  return str2.slice(0, -1)
}