//Clean up after your dog
function crap(x, bags, cap){
  x = x.flat()
  let crap = 0
  for (let i = 0; i < x.length; i++){
    if (x[i] == 'D'){
      return 'Dog!!'
    } else if (x[i] == '@'){
      crap++
    }
  }
  return !bags || crap > bags * cap ? 'Cr@p' : 'Clean'
}