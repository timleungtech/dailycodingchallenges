//Alternate capitalization
function capitalize(s){
  let index0 = []
  let index1 = []
  for (let i = 0; i < s.length; i++){
    if (i % 2 === 0){
      index1.push(s[i])
      index0.push(s[i].toUpperCase())
    } else {
      index0.push(s[i])
      index1.push(s[i].toUpperCase())
    }  
  }
  return [index0.join(''), index1.join('')]
}