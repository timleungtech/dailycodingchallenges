//Rock Off!
function solve(a, b) {
  let alice = 0
  let bob = 0
  
  a.forEach((x, i) => {
    if (x > b[i]) alice++
    if (x < b[i]) bob++
  })
  
  if (alice > bob){
    return `${alice}, ${bob}: Alice made "Kurt" proud!`
  } else if (bob > alice){
    return `${alice}, ${bob}: Bob made "Jeff" proud!`
  } else {
    return `${alice}, ${bob}: that looks like a "draw"! Rock on!`
  }
}