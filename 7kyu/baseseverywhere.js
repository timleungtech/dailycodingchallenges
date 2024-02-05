//Bases Everywhere
function baseFinder(seq){
  // assuming seq of consecutive numbers
  return Math.max(...seq.join('')) + 1
}
// function baseFinder(seq){
//   return Math.max(...[...new Set(seq.join('').split(''))].map(x => +x)) + 1
// }