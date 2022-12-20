//Arguments to Binary addition
function arr2bin(arr){
  return (arr.filter(x => typeof x === 'number').reduce((a, c) => a + c, 0)).toString(2)
}