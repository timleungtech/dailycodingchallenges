//V A P O R C O D E
function vaporcode(string) {
  return string.toUpperCase().split('').filter(x => x !== ' ').join('  ')
}