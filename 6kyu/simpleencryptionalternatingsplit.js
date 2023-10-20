//Simple Encryption #1 - Alternating Split
function encrypt(text, n) {
  if (!text || n <= 0) return text
  for (let j = 0; j < n; j++) {
    let odds = []
    let evens = []
    for (let i = 0; i < text.length; i++) {
      if (i % 2 === 1) odds.push(text[i])
    }
    for (let i = 0; i < text.length; i++) {
      if (i % 2 === 0) evens.push(text[i])
    }
    text = odds.join('') + evens.join('')
  }
  return text
}

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) return encryptedText
  for (let j = 0; j < n; j++) {
    let odds = encryptedText.slice(0, encryptedText.length / 2)
    let evens = encryptedText.slice(encryptedText.length / 2)
    let arr = []
    for (let i = 0; i < evens.length; i++){
      arr.push(evens[i])
      if (odds[i]) arr.push(odds[i])
    }
    encryptedText = arr.join('')
  }
  return encryptedText
}