//Simple Fun #52: Pair Of Shoes
function pairOfShoes(shoes) {
	let left = shoes.filter(x => x[0] === 0).map(x => x[1]).sort((a, b) => a - b).join('')
  let right = shoes.filter(x => x[0] === 1).map(x => x[1]).sort((a, b) => a - b).join('')
  return left == right
}