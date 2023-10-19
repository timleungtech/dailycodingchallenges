//String incrementer
function incrementString (strng) {
  let lastNums = []
  let idx = strng.length - 1
  
  while (strng[idx] == +strng[idx]){
    lastNums.unshift(strng[idx])
    idx--
  }
  
  let numStr = (+lastNums.join('') + 1).toString()
  let numStrWithPad = numStr.padStart(lastNums.length, '0')
  return strng.slice(0, idx + 1) + numStrWithPad
}