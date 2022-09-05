//Hello, Name or World!
function hello(name) {
    if (name === '' || name === undefined) return 'Hello, World!'
    else {
      name = name.toLowerCase().split('')
      name[0] = name[0].toUpperCase()
      name = name.join('')
      return `Hello, ${name}!`
    }
}