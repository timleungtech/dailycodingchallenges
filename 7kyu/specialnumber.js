//Special Number (Special Numbers Series #5)
function specialNumber(n){
  return [...n.toString()].map(x => +x).filter(x => x > 5).length > 0 ? 'NOT!!' : 'Special!!'
}