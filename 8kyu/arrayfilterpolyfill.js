//Implement Array.prototype.filter()
Array.prototype.filter = function (func) {
  let filtered = []
  for (let i = 0; i < this.length; i++) {
    if (func(this[i])) {
      filtered.push(this[i]);
    }
  }
  return filtered
}