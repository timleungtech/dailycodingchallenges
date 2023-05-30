//Highest Scoring Word
function high(x) {
  let words = x.split(' ')
  let scores = []
  for (let i = 0; i < words.length; i++) {
    let sum = 0  
    for (let j = 0; j < words[i].length; j++) {
      sum += words[i].charCodeAt(j) - 96
    }
    scores.push(sum)
  }
  let highestScore = scores.indexOf(Math.max(...scores))
  return words[highestScore]
}