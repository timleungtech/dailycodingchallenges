//Ordered Count of Characters
const orderedCount = function (text) {
  let arr = text.split('')
  let uniqueArr = Array.from(new Set([...arr]))
  let count = 0
  let result = []
  for (let i = 0; i < uniqueArr.length; i++) {
    count = arr.filter(x => x === uniqueArr[i]).length
    result.push([uniqueArr[i], count])
  }
  return result
}