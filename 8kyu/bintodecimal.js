//Bin to Decimal
function binToDec(bin){
    let binArr = bin.split('')
    let sum = 0
    for(let i = binArr.length - 1; i >= 0; i--){
      binArr[i] == '1' ? sum += Math.pow(2, binArr.length - 1 - i) : sum += 0
    }
    return sum
}