//Cats in hats
function height(n) {
  let height = 2000000
  let catHeight = 2000000
  for (let i = 0; i < n; i++) {
    catHeight /= 2.5
    height += catHeight
  }
  return height.toFixed(3)
}