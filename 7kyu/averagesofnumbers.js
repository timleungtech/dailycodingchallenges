//Averages of numbers
function averages(numbers) {
  if (numbers == null || numbers.length < 2) return []
  let res = []
  for (let i = 1; i < numbers.length; i++){
    res.push((numbers[i] + numbers[i-1]) / 2)
  }
  return res
}