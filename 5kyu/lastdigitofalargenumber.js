//Last digit of a large number
var lastDigit = function(str1, str2){  
  // if exponent is 0, return 1
  
  if (parseInt(str2) === 0) return 1;
  
  // otherwise...
  // 0 always returns 0
  // 1 always returns 1
  // 2 rotates between 2, 4, 8, 6....
  // 3 rotates between 3, 9, 7, 1....
  // 4 rotates between 4, 6....
  // 5 always returns 5
  // 6 always returns 6
  // 7 rotates between 7, 9, 3, 1....
  // 8 rotates between 8, 4, 2, 6....
  // 9 rotates between 9, 1....
  
  // because we only need the final digit of str1 to determine the result, let's capture it
  var base = parseInt(str1.slice(-1)) % 10;
  // at worst, the result of any ending digit rotates through four cases, we need two digits here becasue 111%4 === 11%4 != 1%4
  var exp = parseInt(str2.slice(-2)) % 4;
  if (exp === 0) exp = 4;  // if the exponent is a multiple of 4, we want to use '4', not '0' in our function.


  // so what we can do in shorthand is get the final digit of a number with an exponent of 1-4 and this is enough to predict any case.
  
  return Math.pow(base, exp) % 10;
}

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