//Sorted? yes? no? how?
function isSortedAndHow(array) {
  let asc = array.slice().sort((a, b) => a - b).join('')
  let des = array.slice().sort((a, b) => b - a).join('')
  if (array.join('') == asc) {
    return 'yes, ascending'
  } else if (array.join('') == des) {
    return 'yes, descending'
  } else {
    return 'no'
  }
}