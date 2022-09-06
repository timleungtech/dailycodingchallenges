//Isograms
function isIsogram(str) {
    let arr = str.toLowerCase().split('')
    let arr2 = [...new Set(arr)]
    arr = arr.join('')
    arr2 = arr2.join('')
    return arr === arr2
}