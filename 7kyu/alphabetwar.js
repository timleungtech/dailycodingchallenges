//Alphabet war
function alphabetWar(fight){
  let left = 0
  let right = 0
  fight.split('').forEach(x => {
    if (x === 'w'){
      left += 4
    } else if (x === 'p'){
      left += 3
    } else if (x === 'b'){
      left += 2
    } else if (x === 's'){
      left += 1
    } else if (x === 'm'){
      right += 4
    } else if (x === 'q'){
      right += 3
    } else if (x === 'd'){
      right += 2
    } else if (x === 'z'){
      right += 1
    }
  })
  if (left > right){
    return 'Left side wins!'
  } else if (right > left){
    return 'Right side wins!'
  } else {
    return "Let's fight again!"
  }
}