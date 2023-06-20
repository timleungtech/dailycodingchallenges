//Find the vowels
function vowelIndices(word){
  let result = []
  word = word.toLowerCase().split('')
  word.forEach((x, i) => {
    if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u' || x == 'y'){
      result.push(i+1)
    }
  })
  return result
}