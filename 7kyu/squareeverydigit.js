//Square Every Digit
function squareDigits(num){
    return Number(num.toString().split('').map(x => (x**2).toString()).reduce((a, c) => a+c))
}