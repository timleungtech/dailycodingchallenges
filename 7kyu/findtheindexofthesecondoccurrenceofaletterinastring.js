//Find the index of the second occurrence of a letter in a string
function secondSymbol(s, symbol) {
  let idx = s.indexOf(symbol) + 1
  return s.slice(idx).indexOf(symbol) == -1 ? -1 : s.slice(idx).indexOf(symbol) + idx
}