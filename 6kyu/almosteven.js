//Almost Even
var splitInteger = function(num, parts) {
  let min = Math.floor(num/parts)
  let max = Math.ceil(num/parts)
  
  let arr = []
  let mod = parts - (num % parts)
  
  while(mod > 0){
    arr.push(min)
    mod--
  }
  
  mod = num % parts
  while (mod > 0) {
    arr.push(max)
    mod--
  }
  
  return arr
}