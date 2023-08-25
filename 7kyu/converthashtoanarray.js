//Convert Hash To An Array
function convertHashToArray(hash){
  return Object.entries(hash).sort()
}

function convertHashToArray(hash){
  let result = []
  for (const [key, value] of Object.entries(hash)) {
    result.push([key, value])
  }
  return result.sort((a, b) => {
    const keyA = a[0]
    const keyB = b[0]
    if (keyA < keyB) {
      return -1;
    }
    if (keyA > keyB) {
      return 1;
    }
    return 0
  })
}