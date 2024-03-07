//Likes Vs Dislikes
function likeOrDislike(buttons) {
  return buttons.reduce((state, button) => state == button ? 'Nothing' : button, 'Nothing')
}

// function likeOrDislike(buttons) {
//   if (buttons.length == 0) return 'Nothing'
//   let count = 0
//   let i = buttons.length - 1
//   while(buttons[i] == buttons[i-1]){
//     count++
//     i--
//   }
//   return count % 2 == 1 ? 'Nothing' : buttons[buttons.length - 1]
// }