//Simple Fun #261: Whose Move
function whoseMove(lastPlayer, win) {
  let colors = ['white', 'black']
  return win ? lastPlayer : colors.filter(x => x !== lastPlayer).join('')
}