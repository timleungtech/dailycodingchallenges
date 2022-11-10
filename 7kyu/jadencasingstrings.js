//Jaden Casing Strings
String.prototype.toJadenCase = function () {
  return this.split(' ').map(x => x.charAt(0).toUpperCase() + x.substring(1)).join(' ')
}