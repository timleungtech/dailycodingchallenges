//Fake Binary
function fakeBin(x){
    x = x.toString()
    let arr = x.split('')
    let binArr = arr.map(x => x < 5 ? '0' : '1')
    let binStr = binArr.join('')
    return binStr
}