//Number Of Occurrences
Array.prototype.numberOfOccurrences = function(num) {
  return this.filter(x => x === num).length
}