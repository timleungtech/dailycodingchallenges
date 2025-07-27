//Tidy Number (Special Numbers Series #9)
function tidyNumber(n){
  n = n.toString().split('')
  for (let i = 1; i < n.length; i++){
    if (+n[i] < +n[i-1]){
      return false
    }
  }
  return true
}