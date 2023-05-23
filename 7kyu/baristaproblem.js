//Barista problem
function barista(coffees) {
  coffees.sort((a, b) => a - b)
  const cleaning = (coffees.length * (coffees.length - 1))
  let wait = 0
  for (let i = 0; i < coffees.length; i++) {
    wait += (coffees.length - i) * coffees[i]
  }
  const total = cleaning + wait
  return total < 0 ? 0 : total
}