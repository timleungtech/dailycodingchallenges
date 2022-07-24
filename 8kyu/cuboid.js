//Difference of Volumes of Cuboids
function findDifference(a, b) {
    let aVol = a.reduce((a,c) => a * c)
    let bVol = b.reduce((a,c) => a * c)
    return Math.abs(aVol - bVol)
}