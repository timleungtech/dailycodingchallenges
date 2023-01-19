//Your order, please
function order(words) {
  let wordsArr = words.split(' ')
  let charsArr = words.split('')
  let arrIndex = charsArr.filter(Number)
  let arr2 = []
  let arr3 = []
  for(let i = 1; i <= arrIndex.length; i++){
    arr2.push(arrIndex.findIndex(x => x == i))
  }
  for(let j = 0; j < arr2.length; j++){
    arr3.push(wordsArr[arr2[j]])
  }
  return arr3.join(' ')
}