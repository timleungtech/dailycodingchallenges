//Is n divisible by (...)?
function isDivisible(firstN, ...n){
  return n.every(x => firstN % x == 0)
}

function isDivisible(...n){
  return n.filter((x,i,a) => a[0] % x != 0).length == 0
}