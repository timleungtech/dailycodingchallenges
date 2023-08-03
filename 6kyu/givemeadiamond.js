//Give me a Diamond
function diamond(n){
  if (n < 1 || n % 2 === 0) return null
  let string = ''
  for (let i = 0; i < n; i++) {
    let spaceCount = Math.abs(i - Math.floor(n / 2))
    let starCount = n - Math.abs(Math.floor(n / 2) - i) * 2
    string += ' '.repeat(spaceCount)
    string += '*'.repeat(starCount)
    string += '\n'
  }
  return string
}