//Reverse or rotate?
function revrot(str, sz) {
  if (!sz) return ''
  
  let result = ''
  let chunkStart = 0
  let chunkEnd = sz
  let qtyOfChunks = Math.floor(str.length/sz)
  
  for(let i = 0; i < qtyOfChunks; i++){
    let chunk = str.slice(chunkStart, chunkEnd).split('')
    if (chunk.reduce((a, c) => a + +c, 0) % 2 === 0){
      chunk = chunk.reverse().join('')
    } else {
      chunk = chunk.join('').slice(-sz + 1) + chunk[0]
    }
    result += chunk
    chunkStart += sz
    chunkEnd += sz
  }
  
  return result
}