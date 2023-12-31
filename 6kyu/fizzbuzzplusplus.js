//FizzBuzz++
function fizzbuzzPlusPlus(numbers, words) {
  let max = numbers.reduce((a, c) => a * c, 1)
  let res = []
  for (let i = 1; i <= max; i++){
    let str = ''
    for (let j = 0; j < numbers.length; j++){
      if (i % numbers[j] == 0){
        str += words[j]
      }
    }
    if (str) res.push(str)
    else res.push(i)
  }
  return res
}