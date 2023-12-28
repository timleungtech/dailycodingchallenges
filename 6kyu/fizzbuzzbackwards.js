//FizzBuzz Backwards
function reverseFizzBuzz(array) {
  let fizz = []
  let buzz = []
  for(let i = 0; i <= 50; i++){
    if (array[i] === 'FizzBuzz' && fizz.length < 1){
      fizz.push(i+1)
    }
    if (array[i] === 'FizzBuzz' && buzz.length < 1){
      buzz.push(i+1)
    }
    if (array[i] === 'Fizz' && fizz.length < 1){
      fizz.push(i+1)
    }
    if (array[i] === 'Buzz' && buzz.length < 1){
      buzz.push(i+1)
    }
  }
  return [fizz[0], buzz[0]]
}