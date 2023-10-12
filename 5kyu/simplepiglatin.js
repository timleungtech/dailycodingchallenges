//Simple Pig Latin
function pigIt(str){
  let arr = str.split(' ').map(x => {
    if ((x.charCodeAt(0) >= 65 && x.charCodeAt(0) < 91) || (x.charCodeAt(0) >= 97 && x.charCodeAt(0) < 123)) {
      return (x.slice(1) + x[0] + 'ay')
    } else {
      return x[0]
    }
  })
  return arr.join(' ')
}