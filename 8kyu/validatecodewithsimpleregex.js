//validate code with simple regex
function validateCode (code) {
  return /^[1-3]/.test(code)
}

function validateCode (code) {
  let first = code.toString().split('')[0]
  return first == 1 || first == 2 || first == 3
}