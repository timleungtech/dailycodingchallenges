//Split Strings
function solution(str){
  let result = ''
  if (str.length % 2 == 1) {
    str = str + '_'
  }
  for (let i = 0; i < str.length; i+=2) {
    result += str.charAt(i).concat(str.charAt(i + 1).concat('-'))
  }
  result = result.split('-')
  result.pop()
  return result
}