//Remove duplicate words
function removeDuplicateWords (s) {
  s = s.split(' ')
  let unique = [...new Set(s)]
  return unique.join(' ')
}