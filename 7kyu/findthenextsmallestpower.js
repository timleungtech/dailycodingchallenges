//Find the smallest power higher than a given a value
function findNextPower(val, pow_) {
  const x = Math.ceil(val**(1/pow_)) ** pow_
  return x > val ? x : Math.ceil(val**(1/pow_) + 1) ** pow_
}