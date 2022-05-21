// Beginner Series #2 Clock
function past(h, m, s){
    h = h * 3600000
    m = m * 60000
    s = s * 1000
    const sum = h + m + s
    return sum
}