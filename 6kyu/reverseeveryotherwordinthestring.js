//Reverse every other word in the string
function reverse(str){
    return str.split(' ').map((x, i) => i % 2 == 0 ? x : x.split('').reverse().join('')).join(' ').trim()
}