//Build a pile of Cubes
function findNb(m) {
  let sum = 0
  for (let i = 0; i < m**.3333; i++){
    sum += i**3
    if (sum === m){
      return i
    }
  }
  return -1
}