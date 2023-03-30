//Length of missing array
function getLengthOfMissingArray(arrayOfArrays) {
  if (!arrayOfArrays || arrayOfArrays.length === 0 || arrayOfArrays.some(x => !x || x.length === 0)) return 0
  let arr2 = arrayOfArrays.map(x => x.length).sort((a, b) => a - b)
  if (arr2.includes(0) === true) return 0
  for(let i = 0; i < arr2.length - 1; i++){
    if (arr2[i] + 1 != arr2[i+1]) return arr2[i] + 1
  }
}