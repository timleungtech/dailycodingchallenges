//Get the Middle Character
function getMiddle(s){
  let middle = s.length / 2
  if (s.length % 2 == 1){
    return s[Math.floor(middle)]
  } else {
    return s[middle - 1] + s[middle]
  }
}