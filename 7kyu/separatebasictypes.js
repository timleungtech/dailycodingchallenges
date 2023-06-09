//Separate basic types
function separateTypes(input) {
  let obj = {}
  input.forEach(x => obj[typeof x] ? obj[typeof x].push(x) : obj[typeof x] = [x])
  return obj
}