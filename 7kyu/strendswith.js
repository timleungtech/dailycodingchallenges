//String ends with?
function solution(str, ending){
  return str.endsWith(ending)
}

function solution(str, ending){
  if (ending === '') return true
  else return ending.split('').join('') === str.split('').slice(-ending.length).join('')
}