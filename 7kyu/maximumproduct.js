//Maximum Product
function adjacentElementsProduct(array) {
  let max = array[0] * array[1]
  for (let i = 2; i < array.length; i++){
    if (array[i] * array[i-1] > max){
      max = array[i] * array[i-1]
    }
  }
  return max
}