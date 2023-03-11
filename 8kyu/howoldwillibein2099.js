//How old will I be in 2099?
function  calculateAge(yearBorn, yearCurrent) {
  let diff = yearCurrent - yearBorn
  if (yearBorn === yearCurrent){
    return 'You were born this very year!'
  } else if (diff === 1){
    return 'You are 1 year old.'
  } else if (diff === -1){
    return 'You will be born in 1 year.'
  } else if (diff > 0){
    return `You are ${diff} years old.`
  } else {
    return `You will be born in ${Math.abs(diff)} years.`
  }
}