//Sum Factorial
function sumFactorial(arr){
  arr.sort((a, b) => a - b)
  let product = 1
  let list = []
  for (let i = 1; i <= Math.max(...arr); i++){
    product *= i
    for (let j = 0; j < arr.length; j++){
      if (arr[j] === i) {
        list.push(product)
      }
    }
  }
  return list.reduce((a, c) => a + c)
}