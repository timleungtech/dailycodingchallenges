//Insert dashes
function insertDash(num) {
  let str = num.toString()
  for (let i = 0; i < str.length; i++){
    if (str[i] % 2 == 1 && str[i+1] % 2 == 1){
      str = str.slice(0, i+1) + '-' + str.slice(i+1)
      i--
    }
  }
  return str
}