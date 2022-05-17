//Convert number to reversed array of digits
function digitize(n) {
    n = n.toString()
    let newStr = ""
    let newStrArr = []
    let newNumArr = []
    if (n === 0){
      return 0
    } else {
        for(let i = 0; i < n.length; i++){
          newStr += n[n.length-i-1]
          newStrArr = newStr.split('')
          for (let j = 0; j < n.length; j++){
            newNumArr[j] = Number(newStrArr[j])
          }
        }
      }
    return newNumArr
}