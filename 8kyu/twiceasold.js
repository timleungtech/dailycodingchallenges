//Twice as old
function twiceAsOld(dadYearsOld, sonYearsOld) {
    let i = 0
    if (2 * sonYearsOld === dadYearsOld){
      return 0
    } else if (2 * sonYearsOld < dadYearsOld){
      while (2 * sonYearsOld < dadYearsOld){
        sonYearsOld++
        dadYearsOld++
        i++
      }
    } else {
      while (2 * sonYearsOld > dadYearsOld){
        sonYearsOld--
        dadYearsOld--
        i++
      }
    }
    return i
}