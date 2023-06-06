//Exclamation marks series #1: Remove an exclamation mark from the end of string
function remove (string) {
  // replace '!' before the end of the string with ''
  return string.replace(/!$/, '')
}

function remove (string) {
  return string.endsWith('!') ? string.slice(0, string.length - 1) : string
}