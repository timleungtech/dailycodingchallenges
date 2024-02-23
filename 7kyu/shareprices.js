//Share prices
const sharePrice = (invested, changes) => {
  let nums = changes.map(x => {
    if (x < 0) {
      return 1 - (-x/100)
    } else {
      return (x/100) + 1
    }
  })
  return nums.reduce((a, c) => a * c, invested).toFixed(2)
}