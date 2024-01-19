//Did she say hallo?
//regex
function validateHello(greetings) {
  return /h[ae]llo|ciao|salut|hola|ahoj|czesc/i.test(greetings)
}

function validateHello(greetings) {
  greetings = greetings.toLowerCase()
  return greetings.includes('hello') || 
    greetings.includes('ciao') || 
    greetings.includes('salut') || 
    greetings.includes('hallo') || 
    greetings.includes('hola') || 
    greetings.includes('ahoj') || 
    greetings.includes('czesc')
}