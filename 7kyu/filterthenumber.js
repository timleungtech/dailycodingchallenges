//Filter the number
var filterString = function(value) {
  return Number(value.split('').filter(x => x.charCodeAt(0) > 47 && x.charCodeAt(0) < 58).join(''))
}