//How good are you really?
function betterThanAverage(classPoints, yourPoints) {
    let total = classPoints.reduce((sum, x) => sum + x)
    let average = total / (classPoints.length + 1)
    return yourPoints > average ? true : false
}