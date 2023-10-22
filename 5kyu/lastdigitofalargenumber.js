//Last digit of a large number
var lastDigit = function(str1, str2){  
  let result = 0
  let product = ''
  if (str2 == 0) return 1

  switch (str1[str1.length - 1]){
    case '0':
      result = 0
      break
    case '1':
      result = 1
      break
    case '2':
      product = (2 ** ((+str2.slice(-2) % 4) + 4)).toString()
      result = +product[product.length - 1]
      break
    case '3':
      product = (3 ** ((+str2.slice(-2) % 4) + 4)).toString()
      result = +product[product.length - 1]
      break
    case '4':
      product = (4 ** ((+str2.slice(-2) % 2) + 2)).toString()
      result = +product[product.length - 1]
      break
    case '5':
      result = 5
      break
    case '6':
      result = 6
      break
    case '7':
      product = (7 ** ((+str2.slice(-2) % 4) + 4)).toString()
      result = +product[product.length - 1]
      break
    case '8':
      product = (8 ** ((+str2.slice(-2) % 4) + 4)).toString()
      result = +product[product.length - 1]
      break
    case '9':
      product = (9 ** ((+str2.slice(-2) % 2) + 2)).toString()
      result = +product[product.length - 1]
      break
  }
  return result
}