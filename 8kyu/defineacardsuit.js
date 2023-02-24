//Define a card suit
function defineSuit(card) {
  card.split('')
  if (card.includes('♣') === true) return 'clubs'
  else if (card.includes('♦') === true) return 'diamonds'
  else if (card.includes('♥') === true) return 'hearts'
  else if (card.includes('♠') === true) return 'spades'
}