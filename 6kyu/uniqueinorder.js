//Unique In Order
let uniqueInOrder = function (iterable) {
    let uniqueArr = []
    // argument is a string
    if (typeof iterable === 'string'){
      let charArr = iterable.split('')
      for (let i = 1; i <= charArr.length; i++){
        if (charArr[i] !== charArr[i - 1]){
          uniqueArr.push(charArr[i - 1])
        }
        uniqueArr.join('')
      }
      return uniqueArr
      // argument is an array
    } else {
      for (let i = 1; i <= iterable.length; i++) {
        if (iterable[i] !== iterable[i - 1]) {
          uniqueArr.push(iterable[i - 1])
        }
      }
      return uniqueArr
      }
}