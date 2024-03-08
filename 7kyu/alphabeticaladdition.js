//Alphabetical Addition
function addLetters(...letters) {
  if (letters.length == 0) return 'z'
  let num_code = letters.map(x => x.charCodeAt(0) - 96)
  let count = num_code.reduce((a, c) => a + c, 0)
  return count % 26 ? String.fromCharCode((count % 26) + 96) : 'z'
}

// function addLetters(...letters) {
//   if (letters.length == 0) return 'z'
//   let num_code = letters.map(x => x.charCodeAt(0) - 96)
//   let count = num_code.reduce((a, c) => a + c, 0)
//   while (count > 26) count -= 26
//   return String.fromCharCode(count + 96)
// }