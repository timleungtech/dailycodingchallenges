//Building Strings From a Hash
function solution(pairs){
  let keys = Object.keys(pairs)
  let values = Object.values(pairs)
  let string = ''
  for (let i = 0; i < keys.length; i++) {
    string += `${keys[i]} = ${values[i]},`
  }
  return string.slice(0, -1)
} 