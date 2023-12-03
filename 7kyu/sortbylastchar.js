//Sort by Last Char
function last(x){
  return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
}

function last(x){
  x = x.split(' ').sort((a, b) => {
    const wordA = a.slice(-1)
    const wordB = b.slice(-1)
    if (wordA < wordB) {
      return -1
    }
    if (wordA > wordB) {
      return 1
    }
      return 0
    })
  return x
}