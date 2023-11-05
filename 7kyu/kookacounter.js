//Kooka-Counter
var kookaCounter = function(laughing) {
  let count = 0
  let gender = ''
  if (laughing[0] === 'H'){
    gender = 'male'
    count++
  } else if (laughing[0] === 'h'){
    gender = 'female'
    count++
  } else {
    return 0
  }
  for (let i = 1; i < laughing.length; i++){
    if (laughing[i] === 'H' && gender === 'female'){
      gender = 'male'
      count++
    }
    if (laughing[i] === 'h' && gender === 'male'){
      gender = 'female'
      count++
    }
  }
  return count
}