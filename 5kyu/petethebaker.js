//Pete, the baker
function cakes(recipe, available) {
  let oneServing = Object.entries(recipe)
  let portions = []
  for (let i = 0; i < oneServing.length; i++){
    let ingredient = oneServing[i][0]
    portions.push(Math.floor(available[ingredient] / oneServing[i][1]))
  }
  return Math.min(...portions) || 0
}