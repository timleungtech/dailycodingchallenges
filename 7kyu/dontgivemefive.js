//Don't give me five!
function dontGiveMeFive(start, end) {
    let intArr = []
    for (let i = start; i <= end; i++) {
      intArr.push(i)
    }
    let strArr = intArr.map(x => x.toString())
    return strArr.map(x => x.split('')).filter(x => !x.includes('5')).length
}