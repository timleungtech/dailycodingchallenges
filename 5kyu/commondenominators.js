//Common Denominators
function convertFrac(lst){
  let denominators = lst.map(x => x[1])
  let LCM = denominators[0]
  while (denominators.filter((_, i, a) => LCM % a[i] === 0).length !== lst.length){
    LCM += denominators[0]
  }
  return lst.length > 0 ? '(' + lst.map(x => [LCM/x[1]*x[0], LCM]).join(')(') + ')' : ''
}