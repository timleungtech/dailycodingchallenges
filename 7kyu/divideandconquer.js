//Divide and Conquer
function divCon(x){
  let numbers = x.filter(x => typeof x === 'number').reduce((a, c) => a + c, 0)
  let strings = x.filter(x => typeof x === 'string').map(x => +x).reduce((a, c) => a + c, 0)
  return numbers - strings
}