//Draw stairs
function drawStairs(n) {
  let str = ''
  for (let i = 0; i < n; i++){
    str += 'I\n' + ' '.repeat(i+1)
  }
  return str.slice(0, str.lastIndexOf('I') + 1)
}