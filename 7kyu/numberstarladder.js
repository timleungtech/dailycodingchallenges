//Number-Star ladder
function pattern(n){
  let result = ''
  for (let i = 0; i < n; i++) {
    result += 1
    result += '*'.repeat(i)
    result += i + 1
    result += '\n'
  }
  return result.slice(1,-1)
}