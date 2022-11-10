//Does my number look big in this?
function narcissistic(value) {
    let arr = value.toString().split('')
    let sum = arr.reduce((a, c) => a + Math.pow(c, arr.length), 0)
    return sum == value
}