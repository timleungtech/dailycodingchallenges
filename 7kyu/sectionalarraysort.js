//Sectional Array Sort
function sectSort(array, start, length) {
  return length ? array.slice(0, start).concat(array.slice(start, start + length).sort((a, b) => a - b)).concat(array.slice(start + length)) : array.slice(0, start).concat(array.slice(start).sort((a, b) => a - b))
}