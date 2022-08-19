//No zeros for heros
function noBoringZeros(n) {
    let numArr = n.toString().split('')
    for (let i = numArr.length - 1; i > 0; i--) {
      if (numArr[i] === '0') {
        numArr.pop()
      } else {
        break
      }
    }
    return (Number(numArr.join('')))
}