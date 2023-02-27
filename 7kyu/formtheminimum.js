//Form The Minimum
function minValue(values){
  return Number([...new Set (values)].sort((a, b) => a - b).join(''))
}