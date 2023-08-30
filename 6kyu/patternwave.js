//■□ Pattern □■ : Wave
function draw(waves){
  let h = Math.max(...waves)
  let result = ''
  
  for (let i = h; i > 0; i--){
    for (let j = 0; j < waves.length; j++){
      if (waves[j] >= i){
        result += '■'
      } else {
        result += '□'
      }
    }
    result += '\n'
  }
  return result.trim()
}