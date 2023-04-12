//Break camelCase
function solution(string) {
  let chars = string.split('')
  for (let i = chars.length - 1; i >= 0; i--){
    if (chars[i] === chars[i].toUpperCase()){
      chars.splice(i, 0, ' ')
    }
  }
  return chars.join('')
}