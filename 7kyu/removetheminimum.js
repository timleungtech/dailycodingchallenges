//Remove the minimum
function removeSmallest(numbers) {
    let arrCopy = numbers.slice()
    if (numbers == []) return []
    else {
      let minIndex = arrCopy.indexOf(Math.min(...arrCopy))
      arrCopy.splice(minIndex, 1)
      return arrCopy
    }
}