//Sum Arrays
function sum (numbers) {
    return numbers.length < 1 ? 0 : numbers.reduce((a,b) => a + b)
}