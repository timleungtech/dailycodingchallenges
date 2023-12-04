//Complete The Pattern #16
function pattern(n){
  let result = ''
  let string1 = ''
  let init = n.toString().slice(-1)
  for (let i = n; i > 0; i--) {
    let string2 = ''
    string1 += init
    string2 += init.toString().repeat(i)
    init--
    if (init < 0) init += 10
    result += string2 + '\n' + string1
  }
  return result.slice(0, -n-1)
}