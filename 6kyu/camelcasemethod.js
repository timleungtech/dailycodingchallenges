//CamelCase Method
String.prototype.camelCase=function(){
  let str = this.split(' ').map(x => x.charAt(0).toUpperCase() + x.slice(-(x.length - 1)))
  return str.join('')
}