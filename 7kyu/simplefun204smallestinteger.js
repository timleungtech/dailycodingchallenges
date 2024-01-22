//Simple Fun #204: Smallest Integer
function smallestInteger(matrix) {
  let count = 0
	while (matrix.flat().includes(count)) count++
	return count
}

function smallestInteger(matrix) {
  let sortedList = [...new Set(matrix.flat(Infinity).filter(x => x >= 0).sort((a, b) => a - b))]
  if (sortedList[0] !== 0) return 0
  for (let i = 1; i < sortedList.length; i++){
    if (sortedList[i] - 1 !== sortedList[i-1]){
      return sortedList[i-1] + 1
    }
  }
  return sortedList[sortedList.length - 1] + 1
}