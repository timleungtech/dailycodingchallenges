//Difference of perfect squares displayed as sum of consecutive odd numbers
function squaresToOdd(sqr1, sqr2){
  let qty = sqr1 - sqr2//21
  let squaredDiff = sqr1**2 - sqr2**2//5397
  let sum = []

  //start loop at max odd num
  let init = squaredDiff
  if (squaredDiff % 2 === 0){
    init -= 1
  }

  for (let i = init; i > 0; i -= 2){

    //iterate and create sum array based on qty
    for (let j = 0; j < qty * 2; j += 2){
      sum.push(i - j)
    }

    //if the sums equal squaredDiff, return string
    if (sum.reduce((a, c) => a + c) === squaredDiff){
      let sumToString = sum.reduceRight((a, c) => a + ` + ${c}`)
      return `${sqr1}^2 - ${sqr2}^2 = ${sumToString} = ${squaredDiff}`
    }

    //if sums does not equal squaredDiff, reset sum array
    sum = []
  }
}