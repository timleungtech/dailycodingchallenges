//Two fighters, one winner.
function declareWinner(fighter1, fighter2, firstAttacker) {
  // make fighter1 the first attacker
  let temp = fighter1
  if (firstAttacker === fighter2.name) {
    fighter1 = fighter2
    fighter2 = temp
  }
  do {
    fighter2.health -= fighter1.damagePerAttack
    fighter1.health -= fighter2.damagePerAttack
    if (fighter2.health <= 0) return fighter1.name
    if (fighter1.health <= 0) return fighter2.name
  }
  while (fighter1.health > 0 && fighter2.health > 0)
}