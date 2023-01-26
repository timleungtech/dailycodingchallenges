//Mumbling
function accum(s) {
  let result = ''
  for (let i = 0; i < s.length; i++) {
    result += s.charAt(i).toUpperCase() + s.charAt(i).repeat(i).toLowerCase() + ('-')
  }
  return result.slice(0, result.length - 1)
}