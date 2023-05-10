//Multiply Word in String
function modifyMultiply (str,loc,num) {
  return str.split(' ')[loc].concat('-').repeat(num).slice(0, -1)
}