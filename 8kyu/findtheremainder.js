//Find the Remainder
function remainder(n, m){
    if (n >= m && m === 0) return NaN
    else if (m > n && n === 0) return NaN
    else if (n > m && m !== 0) return n % m
    else if (m > n && n !== 0) return m % n
    else return 0
}