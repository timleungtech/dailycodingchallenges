//makeBackronym
//preload variable: dict
var makeBackronym = function(string){
  return string.toUpperCase().split('').map(x => dict[x]).join(' ')
}