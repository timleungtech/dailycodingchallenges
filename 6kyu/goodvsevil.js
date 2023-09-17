//Good vs Evil
function goodVsEvil(good, evil){
  let goodValues = [1,2,3,3,4,10]
  let evilValues = [1,2,2,2,3,5,10]
  
  good = good.split(' ').reduce((a, c, i) => a + +c * goodValues[i], 0)
  evil = evil.split(' ').reduce((a, c, i) => a + +c * evilValues[i], 0)
  
  if (good < evil){
    return 'Battle Result: Evil eradicates all trace of Good'
  } else if (evil < good){
    return 'Battle Result: Good triumphs over Evil'
  } else {
    return 'Battle Result: No victor on this battle field'
  }
}