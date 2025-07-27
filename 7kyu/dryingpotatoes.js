//Drying Potatoes
function potatoes(p0, w0, p1) {
    return Math.floor((w0 * (100-p0)) / (100 - p1))
}

// function potatoes(p0, w0, p1) {
//     let water = (p1 * (100-p0))/(100-p1)
//     let newTotal = water + (100 - p0)
//     return Math.floor(w0 * newTotal/100)
// }