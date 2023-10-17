//Roman Numerals Decoder
function solution (roman) {
  let result = 0
  for (let i = 0; i < roman.length; i++) {
    if (roman[i] === 'M') {
      result += 1000
    } else if (roman[i] === 'D' && roman[i + 1] === 'M') {
      result -= 500
    } else if (roman[i] === 'D') {
      result += 500
    } else if (roman[i] === 'C' && roman[i + 1] === 'M') {
      result -= 100
    } else if (roman[i] === 'C' && roman[i + 1] === 'D') {
      result -= 100
    } else if (roman[i] === 'C') {
      result += 100
    } else if (roman[i] === 'L' && roman[i + 1] === 'C') {
      result -= 50
    } else if (roman[i] === 'L') {
      result += 50
    } else if (roman[i] === 'X' && roman[i + 1] === 'C') {
      result -= 10
    } else if (roman[i] === 'X' && roman[i + 1] === 'L') {
      result -= 10
    } else if (roman[i] === 'X') {
      result += 10
    } else if (roman[i] === 'V' && roman[i + 1] === 'X') {
      result -= 5
    } else if (roman[i] === 'V') {
      result += 5
    } else if (roman[i] === 'I' && roman[i + 1] === 'X') {
      result -= 1
    } else if (roman[i] === 'I' && roman[i + 1] === 'V') {
      result -= 1
    } else if (roman[i] === 'I') {
      result += 1
    }
  }
  return result
}