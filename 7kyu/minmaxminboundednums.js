//MinMaxMin: Bounded Nums
function minMinMax(array) {
  let smallest = Math.min(...array)
  let largest = Math.max(...array)
  let minimumAbsent = smallest + 1
  
  while (array.includes(minimumAbsent)){
    minimumAbsent += 1
  }
  
  return [smallest, minimumAbsent, largest]
}