//Alphabet symmetry
function solve(arr){
  let result = []
  for (let i = 0; i < arr.length; i++) {
    let count = 0
    for (let j = 0; j < arr[i].length; j++) {
      let code = 97 + j
      if (arr[i].toLowerCase().charCodeAt(j) === code) {
        count++
      }
    }
    result.push(count)
  }
  return result
}