//Check same case
function sameCase(a, b){
    if (a.toUpperCase() == a.toLowerCase() || b.toUpperCase() == b.toLowerCase()) return -1
    else if (a === a.toLowerCase() && b == b.toLowerCase()) return 1
    else if (a === a.toUpperCase() && b == b.toUpperCase()) return 1
    else if (a === a.toLowerCase() && b == b.toLowerCase()) return 1
    else if (a === a.toLowerCase() && b == b.toUpperCase()) return 0
    else if (a === a.toUpperCase() && b == b.toLowerCase()) return 0
    else return -1
}