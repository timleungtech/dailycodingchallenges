//Find the Slope
function slope(points){
    return points[2] - points[0] !== 0 ? ((points[3]-points[1])/(points[2]-points[0])).toString() : 'undefined'
}