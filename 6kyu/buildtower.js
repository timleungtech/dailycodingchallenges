//Build Tower
function towerBuilder(nFloors) {
  let arr = []
  for(let i = 1; i <= nFloors; i++){
    arr.push(' '.repeat(nFloors-i) + '*'.repeat(i+i-1) + ' '.repeat(nFloors-i))
  }
  return arr
}