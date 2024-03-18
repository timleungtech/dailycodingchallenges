//Backspaces in string
function cleanString(s) {
  let res = []
  s.split('').forEach(x => {
    if (x !== '#'){
      res.push(x)
    } else {
      res = res.slice(0, -1)
    }
  })
  return res.join('')
}