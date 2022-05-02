//Square(n) Sum
function squareSum(numbers) {
    let squared = 0, sumOfSquares = 0
    for (let i = 0; i < numbers.length; i++) {
      squared = Math.pow(numbers[i], 2)
      sumOfSquares += squared
    }
    return sumOfSquares
}