//Snail
snail = function(array) {
  if (array[0].length === 0) return []
  if (array.length === 1) return array[0]
  let result = []
  for (let i = 0; i < array.length / 2; i++){
    // add top line
    result += `${[...array[i]]},`
    // add last column
    for (let j = i; j < array.length - 1 - i; j++){
      result += `${array[j + 1].pop()},`
    }
    // add last line in reverse
    if (i < (array.length - 1) / 2){
      result += `${array[array.length - 1 - i].reverse()},`
    }
    //add first line in reverse
    for (let m = array.length - 2 - i; m > i + 1; m--){
      result += `${array[m].shift(0)},`
    }
  }
  result = result.slice(0, -1) //remove last comma of string
  return result.split(',').map(x => Number(x))
}