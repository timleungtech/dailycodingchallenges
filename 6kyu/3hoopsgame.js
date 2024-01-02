//3 Hoops Game
const prizeCounter = (s) => {
  let points = 0
  let deactivated = ''
  for (let i = 0; i < s.length; i++){
    if(deactivated == s[i]){
      continue
    }
    points += 100
    if(s[i] == s[i-1] && s[i] == s[i-2]){
      deactivated = s[i]
      if(s[i] === 'R'){
        points += 500
      } else if(s[i] === 'B'){
        points += 300
      } else if(s[i] === 'G'){
        points += 200
      }
    }
  }
  return points
}