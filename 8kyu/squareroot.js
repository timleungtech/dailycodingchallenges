//To square(root) or not to square(root)
function squareOrSquareRoot(array) {
    let newArr = array.map(x => 
      Math.pow(x, .5) % 1 === 0 ? Math.pow(x, .5) : Math.pow(x, 2)
    )
    return newArr
}