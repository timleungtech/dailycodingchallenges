//Valid Parentheses
function validParentheses(parens) {
    let leftCount = 0
    let rightCount = 0
    let arr = parens.split('')
    
    if (arr.length === 0) return true
    if (arr[0] === ')') return false
    if (arr.length % 2 === 1) return false
    
    for (let i = 0; i < arr.length; i++){
      if (arr[i] === '('){
        leftCount++
      } else if (arr[i] === ')'){
        rightCount++
      }
      if (rightCount > leftCount) return false
      if (rightCount === leftCount && arr[i+1] === ')') return false
    }
    
    if (rightCount !== leftCount) return false
    else return true
}