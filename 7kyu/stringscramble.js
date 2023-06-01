//String Scramble
function scramble(str, arr) {
  str = str.split('')
  let arr2 = []
  for (let i = 0; i < str.length; i++){
    arr2.push([str[i], arr[i]])
    arr2.sort((a, b) => a[1] - b[1])
  }
  return arr2.map(x => x[0]).join('')
}