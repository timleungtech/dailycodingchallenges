//Simple Fun #38: House Of Cats
function houseOfCats(legs) {
  let persons = []
  while (legs/2 >= 0){
    persons.unshift(legs/2)
    legs -= 4
  }
  return persons
}