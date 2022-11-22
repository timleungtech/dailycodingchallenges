//Money, Money, Money
function calculateYears(principal, interest, tax, desired) {
  let year = 0
  if (principal === desired) return 0
  else {
    while (principal < desired){
      principal = principal + (principal * interest * (1 - tax))
      year++
    }
  return year
  }
}