//Candy problem
function candies(kids){
  let max = Math.max(...kids)
  let total = kids.reduce((a, c) => a + max - c, 0)
  return kids.length > 1 ? total : -1
}