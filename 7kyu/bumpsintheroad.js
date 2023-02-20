//Bumps in the Road
function bump(x){
  let bumps = 0
  x.split('')
  for(let i = 0; i < x.length; i++){
    if (x[i] === 'n'){
      bumps++
      if (bumps > 15){
        return 'Car Dead'
      }
    }
  }
  return 'Woohoo!'
}