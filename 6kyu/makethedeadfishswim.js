//Make the Deadfish Swim
function parse(data){
  data = data.split('')
  let n = 0
  let output = []
  for (let i = 0; i < data.length; i++){
    if (data[i] === 'i'){
      n++
    } else if (data[i] === 'd'){
      n--
    } else if (data[i] === 's'){
      n = n**2
    } else if (data[i] === 'o'){
      output.push(n)
    }
  }
  return output
}