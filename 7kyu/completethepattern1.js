//Complete The Pattern #1
function pattern(n){
  let str = ''
  for (let i = 1; i <= n; i++){
    str += `${i}`.repeat(i) + '\n'
  }
  return str.slice(0, -1)
}