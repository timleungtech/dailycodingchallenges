//Multiple of index
function multipleOfIndex(array) {
  return array.filter((x, i) => x % i == 0)
}