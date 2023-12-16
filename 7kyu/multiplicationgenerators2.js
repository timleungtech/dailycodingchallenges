//Multiplication - Generators #2
function* generator(a) {
  let b = 0
  while (true) {
    b++
    yield `${a} x ${b} = ${a * b}`
  }
}