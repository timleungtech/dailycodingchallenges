//Roman Numerals Encoder
function solution(number){
  let result = ''
  while (number >= 1000){
    number -= 1000
    result += 'M'
  }
  while (number >= 900){
    number -= 900
    result += 'CM'
  }
  while (number >= 500){
    number -= 500
    result += 'D'
  }
  while (number >= 400){
    number -= 400
    result += 'CD'
  }
  while (number >= 100){
    number -= 100
    result += 'C'
  }
  while (number >= 90){
    number -= 90
    result += 'XC'
  }
  while (number >= 50){
    number -= 50
    result += 'L'
  }
  while (number >= 40){
    number -= 40
    result += 'XL'
  }
  while (number >= 10){
    number -= 10
    result += 'X'
  }
  while (number >= 9){
    number -= 9
    result += 'IX'
  }
  while (number >= 5){
    number -= 5
    result += 'V'
  }
  while (number >= 4){
    number -= 4
    result += 'IV'
  }
  while (number >= 1){
    number -= 1
    result += 'I'
  }
  return result
}