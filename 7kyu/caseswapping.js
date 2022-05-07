//Case Swapping
function swap(str){
    const array = str.split("")
    array.forEach((char, i) => {
      if (char === char.toLowerCase()) {
        array[i] = char.toUpperCase()
      } else {
        array[i] = char.toLowerCase()
        }
    })
    const newStr = array.join("")
    return newStr
}