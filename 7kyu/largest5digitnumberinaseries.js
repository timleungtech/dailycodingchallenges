//Largest 5 digit number in a series
function solution(digits){
  let current = 0
  let max = 0
  for (let i = 0; i <= digits.length - 5; i++){
    current = digits[i] + digits[i+1] + digits[i+2] + digits[i+3] + digits[i+4]
    max = Math.max(current, max)
  }
  return max
}