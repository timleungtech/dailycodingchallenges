//Triple Trouble
function tripleTrouble(one, two, three){
  let str = ''
  for (let i = 0; i < one.length; i++){
    str = str + one.charAt(i) + two.charAt(i) + three.charAt(i)
  }
  return str
}