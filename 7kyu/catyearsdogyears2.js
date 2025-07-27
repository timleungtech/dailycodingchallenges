//Cat Years, Dog Years (2)
var ownedCatAndDog = function(catYears, dogYears) {
  let ownedCat = 0
  if (catYears >= 15){
    ownedCat++
    catYears -= 15
  }
  if (ownedCat >= 1 && catYears >= 9){
    ownedCat++
    catYears -= 9
  }
  while (ownedCat >= 2 && catYears >= 4){
    ownedCat++
    catYears -= 4
  }
  
  let ownedDog = 0
  if (dogYears >= 15){
    ownedDog++
    dogYears -= 15
  }
  if (ownedDog >= 1 && dogYears >= 9){
    ownedDog++
    dogYears -= 9
  }
  while (ownedDog >= 2 && dogYears >= 5){
    ownedDog++
    dogYears -= 5
  }

  return [ownedCat, ownedDog]
}