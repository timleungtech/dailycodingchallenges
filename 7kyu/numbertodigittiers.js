//Number to digit tiers
function createArrayOfTiers(num) {
  let arr = []
  num = num.toString()
  for (let i = 1; i < num.length + 1; i++){
    arr.push(num.slice(0, i))
  }
  return arr
}