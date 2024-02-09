//Shifty Closures
const greetAbe = greet('Abe');
const greetBen = greet('Ben');

function greet(name) {
  return function() {
    return "Hello, " + name + '!'
  }
}

// let name = 'Abe'
// const greetAbe = () => 'Hello, ' + 'Abe' + '!'
// name = 'Ben'
// const greetBen = () => 'Hello, ' + 'Ben' + '!'