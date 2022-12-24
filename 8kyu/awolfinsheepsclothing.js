//A wolf in sheep's clothing
function warnTheSheep(queue) {
  let x = queue.reverse().indexOf('wolf')
  return x !== 0 ? `Oi! Sheep number ${x}! You are about to be eaten by a wolf!` : "Pls go away and stop eating my sheep"
}