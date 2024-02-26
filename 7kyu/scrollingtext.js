//Scrolling Text
function scrollingText(text){
  text = text.toUpperCase()
  let res = [text]
  for (let i = 1; i < text.length; i++){
    text = text.slice(1) + text[0]
    res.push(text)
  }
  return res
}