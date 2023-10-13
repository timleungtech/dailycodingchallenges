//Write Number in Expanded Form
function expandedForm(num) {
  let str = num.toString()
  let result = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] != 0){
      result += str[i] + '0'.repeat(str.length - i - 1) + ' + '
    }
  }
  return result.slice(0, -3)
}