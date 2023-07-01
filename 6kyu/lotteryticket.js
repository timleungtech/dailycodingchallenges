//Lottery Ticket
function bingo(ticket, win){
  let mini_wins = 0
  let char_nums = []
  for (let i = 0; i < ticket.length; i++){
    char_nums = ticket[i][0].split('').map(x => x.charCodeAt(0))
    if (char_nums.includes(ticket[i][1])){
      mini_wins += 1
    }
  }
  return mini_wins >= win ? 'Winner!' : 'Loser!'
}