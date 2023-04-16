//Consecutive strings
function longestConsec(strarr, k) {
  let lenArr = strarr.map(x => x.length)
  let addedArr = []
  let added = 0
  if (k < 1 || k > strarr.length || strarr.length === 0) return ''
  else{
    for (let i = 0; i < lenArr.length + 1 - k; i++) {
      added = 0
      for (let j = i; j < k + i; j++) {
        added += lenArr[j]
      }
      addedArr.push(added)
    }
    let firstIndexOfLongest = addedArr.findIndex(x => x === Math.max(...addedArr))
    let longestStr = ''
    for (let i = 0; i < k; i++) {
      longestStr += strarr[firstIndexOfLongest + i]
    }
    return longestStr
  }
}