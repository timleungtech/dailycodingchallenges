//Convert string to camel case
function toCamelCase(str){
  let a = str.split('')
  for (let i = 0; i < a.length; i++) {
    if (a[i] === '_' || a[i] === '-') {
      a.splice(i, 2, `${a[i + 1].toUpperCase()}`)
    }
  }
  return a.join('')
}