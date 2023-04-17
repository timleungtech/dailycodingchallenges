//The Hashtag Generator
function generateHashtag (str) {
  let result = ''
  if (str.trim().length === 0) return false
  result = '#' + str.split(' ').filter(x => x.trim().length !== 0).map(x => x.trim()[0].toUpperCase() + x.trim().slice(1)).join('')
  return (result.length <= 140) ? result : false
}