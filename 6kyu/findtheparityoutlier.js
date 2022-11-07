//Find The Parity Outlier
function findOutlier(integers){
  let evenCount = 0
  let oddCount = 0
  for (let i = 0; i < integers.length; i++){
    if (integers[i] % 2 === 0){
      evenCount = evenCount + 1
    } else {
      oddCount = oddCount + 1
    }
  }
  if (evenCount === 1){
    return integers.find(x => x % 2 === 0)
  } else if (oddCount === 1){
    return integers.find(x => Math.abs(x) % 2 === 1)
  }
}