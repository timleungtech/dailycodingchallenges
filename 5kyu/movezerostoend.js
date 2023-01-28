//Moving Zeros To The End
function moveZeros(arr) {
  let noZeros = arr.filter(x => x !== 0)
  let zeros = arr.filter(x => x === 0)
  return noZeros.concat(zeros)
}