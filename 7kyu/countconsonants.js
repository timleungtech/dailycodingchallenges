//Count consonants
function consonantCount(str) {
  let consonants = str.toLowerCase().match(/[bcdfghjklmnpqrstvwxyz]/g)
  return consonants ? consonants.length : 0
}