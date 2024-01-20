//Get Smallest Common Factor
function scf(array){
  if (array.length === 0) return 1
  
  let min = Math.min(...array)
  for (let i = 2; i <= min; i++){
    let count = 0
    if (min % i === 0){
      for (let j = 0; j < array.length; j++){
        if (array[j] % i === 0) count++
      }
      if (count === array.length) return i
      count = 0
    }
  }
  return 1
}