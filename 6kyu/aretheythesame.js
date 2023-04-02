//Are they the "same"?
function comp(array1, array2){
  if (!array1 || !array2 || array1.length !== array2.length) return false
    array1 = array1.sort((a, b) => a - b)
    array2 = array2.sort((a, b) => a - b).map(x => x ** .5)
    return array1.join(' ') === array2.join(' ')
}