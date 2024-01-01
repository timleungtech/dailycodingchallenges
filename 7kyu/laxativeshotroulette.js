//Laxative Shot Roulette
function getChance(n, x, a) { 
  let noPoo = 1
  for (let i = 0; i < a; i++){
    noPoo *= (1-(x/n))
    n--
  }
  return +noPoo.toFixed(2)
}