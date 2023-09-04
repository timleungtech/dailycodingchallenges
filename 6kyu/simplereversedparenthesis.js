//Simple reversed parenthesis
function solve(s){
  let a = s.split('')
  let open = 0
  let close = 0
  let reversals = 0
  
  for (let i = 0; i < a.length; i++){
    if (a[i] === '('){
      open++
    } else if (a[i] === ')'){
      close++
    }
    //change all closed brackets appearing before open brackets to open
    if (close > open){
      a[i] = '('
      open++
      close--
      reversals++
    }
  }
  return ((open - close) % 2 === 0) ? reversals + ((open - close) / 2) : -1
}