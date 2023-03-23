//Even numbers in an array
function evenNumbers(array, number) {
  return array.filter(x => x % 2 === 0).slice(-number)
}