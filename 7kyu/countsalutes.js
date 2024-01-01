//Count salutes
function countSalutes(hallway) {
  let salutes = 0
  for(let i = 0; i < hallway.length - 1; i++){
    if (hallway[i] == '>'){
      for (let j = i + 1; j < hallway.length; j++){
        if (hallway[j] == '<'){
          salutes += 2
        }
      }
    }
  }
  return salutes
}